import { Component } from '@angular/core';
import { AppSettings } from '../../Objects/AppSettings';

@Component({
  selector: 'app-gameplay-tischkicker',
  standalone: true,
  imports: [],
  templateUrl: './gameplay-tischkicker.component.html',
  styleUrl: './gameplay-tischkicker.component.css'
})
export class GameplayTischkickerComponent {
  game = AppSettings.TEST_GAME
}
