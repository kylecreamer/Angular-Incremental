import { Component,  Input } from '@angular/core';
import {TickerComponent} from './ticker/ticker.component';
import {ClickerComponent} from './clicker/clicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

constructor(){}
}
