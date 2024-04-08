import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

    // ดึง token จาก localStorage
    getToken(): string | null {
      return localStorage.getItem('loginToken');
    }

    logout(): void {
      // ทำการลบ Token หรือทำลายข้อมูลที่เกี่ยวข้อง
      if(!this.getToken()){
        alert("เกิดข้อผืดพลาดโปรด LOGIN ใหม่อีกครั้ง")
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
