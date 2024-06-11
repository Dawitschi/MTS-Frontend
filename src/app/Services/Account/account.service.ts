import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Account } from '../../Objects/Account';
import { AppSettings } from '../../Objects/AppSettings';
import { environment } from '../../../enviroment/enviroment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
  ) {
   }
  

  public getAccounts(): Observable<Account[]> {
     return this.http.get<any>(`${environment.apiUrl}/Account/allAccounts`);
  }


}
