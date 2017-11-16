import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherElementComponent } from './weather-element/weather-element.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherElementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
