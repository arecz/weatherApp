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

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeather(this.index);
  }



}
