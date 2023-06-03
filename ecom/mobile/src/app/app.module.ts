import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vivo1Component } from './vivo1/vivo1.component';
import { FormsModule } from '@angular/forms';
import { KartComponent } from './kart/kart.component';

@NgModule({
  declarations: [
    AppComponent,
    Vivo1Component,
    KartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
