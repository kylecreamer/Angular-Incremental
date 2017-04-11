import { Component, OnInit, Input} from '@angular/core';
import {Clicker} from '../../clicker';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css'],
  inputs: ['clicker']
})

export class ClickerComponent {
clickers : Clicker[];
constructor(){
    this.clickers = [new Clicker(
                "Gather Eggs",
                1
             ),
           new Clicker(
            "Hire Bunny",
            .5
          )]
     }
}
