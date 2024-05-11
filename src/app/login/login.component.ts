import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from '../Interface/API_URLS';
import { LoginObj } from '../Interface/Login_OBJ';
import { Regist } from '../Interface/Regist_OBJ';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }
  }

  loginObject: LoginObj = {
    userName: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}


  onLogin() {
    this.http
      .post(API_URLS.LOCAL + API_URLS.LOGIN, this.loginObject, {
        responseType: 'json',
      })
      .subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          localStorage.setItem('loginToken', res.data.token);
          this.roleBase().subscribe((role: string) => {
            if (role === "USER_ROLE") {
              this.router.navigateByUrl('/user');
            } else if (role === "ADMIN_ROLE") {
              this.router.navigateByUrl('/admin');
            }
          });
        } else {
          alert(res.message);
        }
      });
  }
  
  roleBase() {
    return this.http.get(API_URLS.LOCAL + API_URLS.CHECKROLEBASE).pipe(
      map((res: any) => {
        if (res.result) {
          const role = res.message;
          return role;
        } else {
          alert("เกิดข้อผิดพลาด");
          this.router.navigateByUrl('/login');
        }
      }),
      catchError((error: any) => {
        alert("เกิดข้อผิดพลาด");
        this.router.navigateByUrl('/login');
        return throwError(error);
      })
    );
  }

  registObject: Regist = {
    uid: '',
    nid: '',
    username: '',
    password: '',
    age: 0,
    address: '',
    roles: '',
  };

  onRegister() {
    debugger;
    this.http
      .post(API_URLS.LOCAL + API_URLS.REGIST, this.registObject, {
        responseType: 'text',
      })
      .subscribe((res: any) => {
        if (res.result) {
          alert(res);
          this.router.navigateByUrl('/login');
        } else {
          alert(res);
        }
      });
  }
}
