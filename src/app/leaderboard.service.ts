import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './Player';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private apiServerURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

 public getDailyLeaderboard(): Observable<Player[]> {
   return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Daily`);
 }

 public getWeeklyLeaderboard(): Observable<Player[]> {
  return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Weekly`);
}

 public getAllTimeLeaderboard(): Observable<Player[]> {
  return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Alltime`);
}
}
