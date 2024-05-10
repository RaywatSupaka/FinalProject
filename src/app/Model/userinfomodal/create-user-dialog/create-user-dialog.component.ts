import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { FileHandle } from 'src/app/Interface/File_HandleOBJ';


interface UserPfobj {
  uid: string;
  nid: string;
  username: string;
  password: string;
  age: number;
  address: string;
  roles: string;
  img: FileHandle[];
}

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dialogRef.updateSize('auto', 'auto');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  UserDetails: UserPfobj = {
    uid: '',
    nid: '',
    username: '',
    password: '',
    age: 0,
    address: '',
    roles: '',
    img: []
  };

   imageUrl: SafeUrl | undefined;

  onFileSelected(event: any) {
    console.log(event);
    const selectedFile = event.target.files[0];
    if (selectedFile) {

      const fileHandle: FileHandle = {
        file: selectedFile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(selectedFile))
      };

      this.UserDetails.img.push(fileHandle);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(selectedFile));
    }

  }


  submitForm() {
    if (this.UserDetails.img) {

      console.log("ข้อมูลที่ส่งไป ", this.UserDetails);
      console.log("ข้อมูลที่ส่งไป ", this.UserDetails.img);

      const formData = new FormData();
      formData.append(
        'websiteDetailsModel',
        new Blob([JSON.stringify(this.UserDetails)], { type: 'application/json' })
      );

      for (var i = 0; i < this.UserDetails.img.length; i++) {
        formData.append(
          'image',
          this.UserDetails.img[i].file,
          this.UserDetails.img[i].file.name
        );
      }

      this.http.post(API_URLS.LOCAL + API_URLS.ADDWBSITEDETAIL, formData).subscribe(
        (res: any) => {
          console.log(res);
          alert(res.message);
          if (res.result) {
            this.dialogRef.close({ result: true });
          }
        }
      );
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }
}
