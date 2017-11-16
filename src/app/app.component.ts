import { Weather } from './shared/weather.model';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weathers: Weather[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
      this.weathers = this.weatherService.getWeathers();
    }

}
