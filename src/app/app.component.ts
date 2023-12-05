import { Component } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  
  
  constructor( private http: HttpClient  ) {

  }
  
  // fetchDataFromDatabase() {
  //   const params = new HttpParams().set('title', 'Json'); // กำหนด params
  
  //   this.http.get('http://localhost:8778/flukeController/findAll', { params }).subscribe(
  //     (data) => {
  //       console.log('Fetched data:', data);
       
  //     },
  //     (error) => {
  //       console.error('Failed to fetch data:', error);
  //     }
  //   );
  //   }  
}
