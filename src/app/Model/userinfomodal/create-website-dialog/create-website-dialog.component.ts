import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebData } from 'src/app/Interface/WebData_OBJ';

@Component({
  selector: 'app-create-website-dialog',
  templateUrl: './create-website-dialog.component.html',
  styleUrls: ['./create-website-dialog.component.css']
})
export class CreateWebsiteDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateWebsiteDialogComponent>,private http:HttpClient) { }

  ngOnInit() {
    this.dialogRef.updateSize('80%', '80%');
}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  webDetails: WebData = {
    wid: '',
    wname: '',
    local: '',
    status: 0,
    description: '',
    img: '',
    type: '',
  };

  image: File | null = null;

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0]; // รับไฟล์ที่เลือกจากอีเวนท์
    if (selectedFile) {
      const reader = new FileReader(); // สร้าง FileReader object เพื่ออ่านข้อมูลจากไฟล์
      reader.onload = (e: any) => {
        const selectedImage = document.getElementById('selected-image');
        if (selectedImage) {
          selectedImage.setAttribute('src', e.target.result); // กำหนด source ของรูปภาพให้กับ element <img>
        }
      };
      reader.readAsDataURL(selectedFile); // อ่านไฟล์และแปลงเป็น URL ของข้อมูลภาพ
    }
  }
  

  submitForm() {
    const formData = new FormData();
    formData.append('websiteDetailsModel', JSON.stringify(this.webDetails));
    if (this.image) {
      formData.append('image', this.image);
    }

    this.http.post('http://localhost:8080/addnewweb', formData).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
