import { Component, Input } from '@angular/core';
import { Game } from '../../Objects/Game';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-history-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-game.component.html',
  styleUrl: './history-game.component.css'
})
export class HistoryGameComponent {
  @Input({required: true, alias: "game"}) game!: Game;
  
  constructor() {
    
  }
}
