import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../Interface/API_URLS';

@Injectable()
export class CustomeInterceptor implements HttpInterceptor {

  constructor() {}
  
  private static readonly noTokenRequired: { [key: string]: boolean } = { // เพิ่ม URL อื่น ๆ ที่ไม่ต้องการ Token ตามต้องการ
    [API_URLS.LOGIN]: false,
    // [API_URLS.ADD_USER]: false,

  };

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // ตรวจสอบว่า request นี้คือ request ที่ไม่ต้องการ Token หรือไม่
    if (CustomeInterceptor.noTokenRequired[request.url]) {
      return next.handle(request);  // ไม่แนบ Token
    }

    // สำหรับ request ที่ต้องการแนบ Token
    const token = localStorage.getItem('loginToken');
    const newCloneRequest = request.clone({
      setHeaders:{
        Authorization : `Bearer ${token}`
      }
    });

    return next.handle(newCloneRequest);
  }
}
