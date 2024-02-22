import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

    // ดึง token จาก localStorage
    getToken(): string | null {
      return localStorage.getItem('loginToken');
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
