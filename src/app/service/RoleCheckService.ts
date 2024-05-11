import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../Interface/API_URLS';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleCheckService {
  constructor(private http: HttpClient,private router: Router) {}
  checkUserRole(): Observable<string> {
    return this.http.get(API_URLS.LOCAL + API_URLS.CHECKROLEBASE).pipe(
      map((res: any) => {
        if (res.result) {
          return res.message;
        } else {
          alert('User role check failed');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
