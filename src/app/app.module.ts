import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



      
@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

