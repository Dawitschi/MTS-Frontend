import { Component } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-gameplay-history',
  standalone: true,
  imports: [],
  templateUrl: './gameplay-history.component.html',
  styleUrl: './gameplay-history.component.css'
})
export class GameplayHistoryComponent {
  public games: Game[] = [];

  
}
