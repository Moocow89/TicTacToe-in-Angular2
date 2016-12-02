import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayerSelectComponent } from './playerSelect.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  PlayerSelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
