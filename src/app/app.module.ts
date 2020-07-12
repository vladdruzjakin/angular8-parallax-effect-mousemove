import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParallaxItemDirective } from './directive/parallax-item.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParallaxItemDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
