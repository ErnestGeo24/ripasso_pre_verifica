import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConteinerComponent } from './conteiner/conteiner.component';
import { MacchinaComponent } from './macchina/macchina.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteinerComponent,
    MacchinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
