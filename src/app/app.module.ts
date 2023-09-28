import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GokuComponent } from './goku/goku.component';
import { gohanComponent } from './goku/gohan/gohan.component';
import { videlComponent } from './goku/gohan/videl/videl.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    gohanComponent,
    videlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }