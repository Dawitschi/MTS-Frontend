import { Component, OnInit } from '@angular/core';
import { Game } from '../../Objects/Game';
import { HistoryGameComponent } from '../history-game/history-game.component';
import { appConfig } from '../../app.config';
import { GameService } from '../../Services/Leaderboard/Game/game.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gameplay-history',
  standalone: true,
  imports: [HistoryGameComponent, CommonModule],
  templateUrl: './gameplay-history.component.html',
  styleUrl: './gameplay-history.component.css'
})
export class GameplayHistoryComponent implements OnInit{
  public games: Game[] = [];

  ngOnInit(): void {
    this.getLastGames()
  }

  constructor(private gameService: GameService) {

  }
  

  public getLastGames(): void {
    this.gameService.getGamesofTable().subscribe(
      (response: Game[]) => {
        this.games = response;
      }
    );
  }
  
}
