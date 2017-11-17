import { WeatherService } from '../weather.service';
import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../shared/weather.model';

@Component({
  selector: 'app-weather-element',
  templateUrl: './weather-element.component.html',
  styleUrls: ['./weather-element.component.css']
})
export class WeatherElementComponent implements OnInit {

  @Input() index: number;
  weather: Weather;
  link: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeather(this.index);
  }

  onWidgetClick() {
    switch (this.weather.city) {
      case 'New York':
      this.link = 'https://www.yahoo.com/news/weather/united-states/new-york/new-york-2459115';
      break;
      case 'Warsaw':
      this.link = 'https://www.yahoo.com/news/weather/poland/masovian/warsaw-523920/';
      break;
      case 'London':
      this.link = 'https://www.yahoo.com/news/weather/united-kingdom/england/london-44418';
      break;
      case 'Lodz':
      this.link = 'https://www.yahoo.com/news/weather/poland/lodz/%C5%81%C3%B3d%C5%BA-505120/';
      break;
      case 'Berlin':
      this.link = 'https://www.yahoo.com/news/weather/germany/berlin/berlin-638242/';
      break;
    }
  }
}
