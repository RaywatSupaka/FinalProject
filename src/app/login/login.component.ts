import { HttpClient } from '@angular/common/http';
import { Component ,ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from '../Interface/API_URLS';
import { LoginObj } from '../Interface/Login_OBJ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }
  }

  loginObject: LoginObj = {
    userName: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router){}

  onLogin() {
    debugger;
    this.http.post('http://localhost:8080'+ API_URLS.LOGIN, this.loginObject, { responseType: 'json' }).subscribe((res: any) => {
        if (res.result) {
            alert(res.message);
            localStorage.setItem('loginToken', res.data.token);
            this.router.navigateByUrl('/dbupage');
        } else {
            alert(res.message);
        }
    });
    }
  

}
