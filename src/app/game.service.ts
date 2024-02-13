import { Injectable } from '@angular/core';
import { AppSettings } from './AppSettings';
import { HttpClient } from '@angular/common/http';
import { Game } from './Game';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiServerURL = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  public getGamesofTable(): Observable<Game[]> {
    return of(AppSettings.TEST_GAMES);
    //return this.http.get<any>(`${this.apiServerURL}/Game/test`);
 }
}
