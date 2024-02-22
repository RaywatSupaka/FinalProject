import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserPfobj } from 'src/app/Interface/UserPF_OBJ';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/Interface/API_URLS';

@Component({
  selector: 'app-userinfomodal',
  templateUrl: './userinfomodal.component.html',
  styleUrls: ['./userinfomodal.component.css']
})
export class UserinfomodalComponent {
  
  @Input() userData: UserPfobj | null = null;
  @Output() dataSaved = new EventEmitter<any>();

  constructor(public bsModalRef: BsModalRef,private http: HttpClient) {
  }


  public userDetails: UserPfobj = {
    uid: '',
    nid: '',
    username: '',
    password: '',
    age: 0,
    address: '',
    roles: ''
  }


 ngOnInit() {
    console.log("ค่าที่รับมา", this.userData);

    if (this.userData) {
      this.userDetails = {
        uid: this.userData.uid,
        nid: this.userData.nid,
        username: this.userData.username,
        password: this.userData.password,
        age: this.userData.age,
        address: this.userData.address,
        roles: this.userData.roles
      }
    }
  }

  onClose() {
    this.bsModalRef.hide();
  }

  onSave() {
    let isDataValid = true;
  
    if (!this.userDetails.uid || !this.userDetails.nid || !this.userDetails.username || !this.userDetails.age || !this.userDetails.address) {
      isDataValid = false;
      window.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  
    if (isDataValid) {
      const newData = {
        uid: this.userDetails.uid,
        nid: this.userDetails.nid,
        username: this.userDetails.username,
        password: this.userDetails.password,
        age: this.userDetails.age,
        address: this.userDetails.address,
        roles: this.userDetails.roles
      }
  
      this.http.put('http://localhost:8080' + API_URLS.USEREDIT, newData, { responseType: 'text' }).subscribe((res: any) => {
        if (res) {
          alert(res);
        } else {
          alert(res);
        }
      });

      this.dataSaved.emit(newData);
      this.bsModalRef.hide();
    }

  }
  

}
