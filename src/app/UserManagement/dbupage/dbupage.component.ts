import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbupage',
  templateUrl: './dbupage.component.html',
  styleUrls: ['./dbupage.component.css']
})
export class DBUpageComponent {

  users: any[]=[];

  constructor(private http: HttpClient){
    this.loaduser();
  }

  loaduser(){
    this.http.get('http://localhost:8080/UserService/findAll').subscribe((res:any)=>{
      this.users = res;
    })
  }

}
