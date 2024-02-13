import { Component } from '@angular/core';
import { GameplayHistoryComponent } from '../gameplay-history/gameplay-history.component';
import { GameplayTischkickerComponent } from '../gameplay-tischkicker/gameplay-tischkicker.component';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [GameplayHistoryComponent, GameplayTischkickerComponent],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css'
})
export class GameplayComponent {

}
