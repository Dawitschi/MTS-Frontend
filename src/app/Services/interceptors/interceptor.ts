import { Inject, Injectable, Injector, PLATFORM_ID, Provider, afterNextRender, afterRender, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpInterceptorFn, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

import { environment } from '../../../enviroment/enviroment';
import { AccountService } from '../Account/account.service';
import { LogInService } from '../LogIn/logIn.service';
import { Account } from '../../Objects/Account';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private readonly platformId = inject(PLATFORM_ID);
    
    constructor(
    ) {
     }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        if(isPlatformBrowser(this.platformId)) {
            const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!)).value;;
            const isLoggedIn = user && user.token;
            const isApiUrl = req.url.startsWith(environment.apiUrl);
            if (isLoggedIn && isApiUrl) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${user!.token}`
                    }
                });
            }
        }
        return next.handle(req);
    }
}