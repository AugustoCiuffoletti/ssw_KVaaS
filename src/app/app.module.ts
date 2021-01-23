import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KvaasService } from './kvaas.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpClientJsonpModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ KvaasService ]
})
export class AppModule { }
