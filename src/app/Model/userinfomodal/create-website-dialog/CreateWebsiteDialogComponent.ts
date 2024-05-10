import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { FileHandle } from 'src/app/Interface/File_HandleOBJ';


interface WebDataInsert {
  wid: string;
  wname: string;
  local: string;
  status: number;
  type: string;
  description: string;
  img: FileHandle[];
}

@Component({
  selector: 'app-create-website-dialog',
  templateUrl: './create-website-dialog.component.html',
  styleUrls: ['./create-website-dialog.component.css']
})
export class CreateWebsiteDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateWebsiteDialogComponent>,
    private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dialogRef.updateSize('auto', 'auto');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  webDetails: WebDataInsert = {
    wid: '',
    wname: '',
    local: '',
    status: 0,
    description: '',
    img: [],
    type: '',
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

      this.webDetails.img.push(fileHandle);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(selectedFile));
    }

  }


  //this.webDetails.wname && this.webDetails.local && 
  //this.webDetails.status && this.webDetails.type && 
  //this.webDetails.description && 
  submitForm() {
    if (this.webDetails.wname && this.webDetails.local && 
      this.webDetails.status && this.webDetails.type &&
      this.webDetails.description && this.webDetails.img) {

      const formData = new FormData();
      formData.append(
        'websiteDetailsModel',
        new Blob([JSON.stringify(this.webDetails)], { type: 'application/json' })
      );

      for (var i = 0; i < this.webDetails.img.length; i++) {
        formData.append(
          'image',
          this.webDetails.img[i].file,
          this.webDetails.img[i].file.name
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
