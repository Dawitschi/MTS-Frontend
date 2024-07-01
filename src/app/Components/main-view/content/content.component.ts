import { Component } from '@angular/core';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameplayComponent } from './gameplay/gameplay.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LeaderboardComponent, GameplayComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
