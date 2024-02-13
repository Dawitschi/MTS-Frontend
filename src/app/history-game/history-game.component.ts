import { Component, Input } from '@angular/core';
import { Game } from '../Game';
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
  @Input({required: true}) game!:Game;

  constructor() {}
}
