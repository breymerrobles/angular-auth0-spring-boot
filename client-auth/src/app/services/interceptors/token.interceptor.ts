import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('access_token');
        console.log('token<<' + accessToken);
        const token = localStorage.getItem('id_token');
        // Authorization: `Bearer ${accessToken}`
        console.log('token<<' + token);
        const headers: HttpHeaders = new HttpHeaders();
        headers.set('Authorization', `Bearer ${token}`);
      
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
         headers.append('Access-Control-Allow-Headers', 'session-variable');
        headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        request = request.clone({
            headers: headers
        });
        return next.handle(request);
    }
}