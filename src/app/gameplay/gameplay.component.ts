import { Component } from '@angular/core';
import { GameplayHistoryComponent } from '../gameplay-history/gameplay-history.component';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [GameplayHistoryComponent],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css'
})
export class GameplayComponent {

}
