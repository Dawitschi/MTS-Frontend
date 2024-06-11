import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Player } from '../../Objects/Player';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private apiServerURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

 public getDailyLeaderboard(): Observable<Player[]> {
   return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Daily`).pipe(catchError(error => EMPTY));
 }

 public getWeeklyLeaderboard(): Observable<Player[]> {
  return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Weekly`).pipe(catchError(error => EMPTY));
}

 public getAllTimeLeaderboard(): Observable<Player[]> {
  return this.http.get<any>(`${this.apiServerURL}/Leaderboard/Alltime`).pipe(catchError(error => EMPTY));
}
}
