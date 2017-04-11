import { Component, OnInit, Input } from '@angular/core';
import {Ticker} from "../../ticker";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
  inputs: ['ticker']
})

export class TickerComponent {
tickers : Ticker[];
constructor(){
this.tickers = [new Ticker(
      "Eggs",
        0
     ),
 new Ticker(
  "Bunnies",
    0
  )]

}
}
