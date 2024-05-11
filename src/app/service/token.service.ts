import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from '../Interface/API_URLS';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router, private http: HttpClient) {}

  // ดึง token จาก localStorage
  getToken(): string | null {
    return localStorage.getItem('loginToken');
  }

  checkRoles(): Observable<boolean> {
    return this.http.get(API_URLS.LOCAL + API_URLS.CHECKROLEBASE).pipe(
      map((res: any) => {
        if (res.result) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error: any) => {
        alert("เกิดข้อผิดพลาด");
        this.router.navigateByUrl('/login');
        return throwError(error);
      })
    );
  }

  logout(): void {
    if (!this.getToken()) {
      alert('เกิดข้อผืดพลาดโปรด LOGIN ใหม่อีกครั้ง');
      this.router.navigate(['/login']);
    }
  }

  // แปลง JWT Token
  decodeJwtToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }

  // ดึง userId จาก token
  getUserIdFromToken(token: string): string | null {
    const decodedToken = this.decodeJwtToken(token);
    return decodedToken?.sub || null;
  }
}
