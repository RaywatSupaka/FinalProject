import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { UserPfobj } from 'src/app/Interface/UserPF_OBJ';
import { TokenService } from 'src/app/service/token.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserinfomodalComponent } from 'src/app/Model/userinfomodal/userinfomodal.component';

@Component({
  selector: 'app-pfupage',
  templateUrl: './pfupage.component.html',
  styleUrls: ['./pfupage.component.css']
})
export class PFUpageComponent {


    constructor(private http: HttpClient, private tokenService: TokenService,private modalService: BsModalService,public bsModalRef: BsModalRef){
      this.loadUserByToken();
    }
  
    userPfobj: UserPfobj | null = null;
  
  loadUserById(userId: string): void {
    this.http.get(API_URLS.LOCAL + API_URLS.USERPF + `/${userId}`).subscribe((res: any) => {
      console.log(res);
      this.userPfobj = res;
    });
  }

  loadUserByToken(): void {
    const token = this.tokenService.getToken();

    if (token) {
      const userId = this.tokenService.getUserIdFromToken(token);
      if (userId) {
        this.loadUserById(userId);
      }
    } else {
      console.error('Token not found.');
    }
  }

  public openEditModal(data: any): void {
    const initialState = {
      config: {
        title: "Users Infomation",
        save: "Save",
        cancel: "Cancel"
      },
      userData: data
    };
    this.bsModalRef = this.modalService.show(UserinfomodalComponent, {
      initialState,
      animated: true,
      backdrop: 'static',
      class: 'modal-md'
    });
    this.bsModalRef.content.dataSaved.subscribe((data: any) => {
      this.userPfobj = (data);
    });

  }

}
