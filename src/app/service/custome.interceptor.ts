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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // ตรวจสอบว่า request นี้คือ request ที่ไม่ต้องการ Token หรือไม่
    if (request.url.includes(API_URLS.LOGIN)) {
      return next.handle(request);  // ไม่แนบ Token สำหรับ request สำหรับ login
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
