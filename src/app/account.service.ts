import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  

  private apiServerURL = 'http://localhost:8080'

  public getAccounts(): Observable<Account[]> {
     return this.http.get<any>(`${this.apiServerURL}/Account/allAccounts`);
  }

}
