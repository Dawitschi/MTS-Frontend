import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Account } from '../../Objects/Account';
import { AppSettings } from '../../Objects/AppSettings';
import { environment } from '../../../enviroment/enviroment';
import { Router } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  
  private readonly platformId = inject(PLATFORM_ID);
  private accountSubject: BehaviorSubject<Account | null> | undefined;
  public account: Observable<Account | null> | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    if(isPlatformBrowser(this.platformId)) {
      this.accountSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.account = this.accountSubject.asObservable();
    }
   }

  public get userValue() {
    if(this.accountSubject == undefined) {
      return undefined;
    }
    return this.accountSubject!.value;
}

  public login(password:Text, username: Text) {
    return this.http.post<Account>(`${environment.apiUrl}/users/authenticate`, { username, password }).pipe(map(account => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(account));
      this.accountSubject!.next(account);
      return account;
  }));;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.accountSubject!.next(null);
    this.router.navigate(['/account/login']);
}

}
