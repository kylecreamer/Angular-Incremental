import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TickerComponent } from './ticker/ticker.component';
import { ClickerComponent } from './clicker/clicker.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    ClickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
