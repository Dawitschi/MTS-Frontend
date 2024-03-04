import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/Account/account.service';
import { Account } from '../../Objects/Account';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { Player } from '../../Objects/Player';
import { LeaderboardService } from '../../Services/Leaderboard/leaderboard.service';


@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnInit{
  public dailyplayers: Player[] = [];
  public allTimeplayers: Player[] = [];
  public weeklyplayers: Player[] = [];


  constructor(private leaderboardservice: LeaderboardService) {}

  ngOnInit(): void {
    this.getDailyLeaderboard();
    this.getAllTimeLeaderboard();
    this.getWeeklyLeaderboard();
  }

  public getDailyLeaderboard(): void {
    this.leaderboardservice.getDailyLeaderboard().subscribe(
      (response: Player[]) => {
        this.dailyplayers = response;
      }
    )
  }

  public getWeeklyLeaderboard(): void {
    this.leaderboardservice.getWeeklyLeaderboard().subscribe(
      (response: Player[]) => {
        this.weeklyplayers = response;
      }
    )
  }

  public getAllTimeLeaderboard(): void {
    this.leaderboardservice.getAllTimeLeaderboard().subscribe(
      (response: Player[]) => {
        this.allTimeplayers = response;
      }
    )
  }
}
