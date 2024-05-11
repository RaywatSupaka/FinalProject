import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../Interface/API_URLS';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: TokenService, private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    if (this.authService.getToken()) {
      return this.http.get(API_URLS.LOCAL + API_URLS.VALIDATETOKEN).pipe(
        map((res: any) => {
          if (res.result) {
            return true;
          } else {
            alert(res.message);
            this.authService.logout();
            return false;
          }
        })
      );
    } else {
      this.authService.logout()
      return of(false);
    }
    
  }
}