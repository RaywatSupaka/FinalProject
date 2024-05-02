import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WebData } from 'src/app/Interface/WebData_OBJ';

@Component({
  selector: 'app-websitecreate',
  templateUrl: './websitecreate.component.html',
  styleUrls: ['./websitecreate.component.css']
})
export class WebsitecreateComponent {
  
  constructor(private http:HttpClient){}
  
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
    this.image = event.target.files[0];
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
        // Handle success response
      },
      (error) => {
        console.error(error);
        // Handle error response
      }
    );
  }
}
