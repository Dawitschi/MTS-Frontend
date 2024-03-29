import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../Objects/Account';
import { AppSettings } from '../../Objects/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  

  private apiServerURL = AppSettings.API_ENDPOINT;

  public getAccounts(): Observable<Account[]> {
     return this.http.get<any>(`${this.apiServerURL}/Account/allAccounts`);
  }

}
