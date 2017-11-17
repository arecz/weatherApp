import { Weather } from './shared/weather.model';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weathers: Weather[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
      this.weatherService.addWeathers();

      const citiesChange = Observable.create((observer: Observer<Weather[]>) => {
        setTimeout(() => observer.next(this.weatherService.getWeathers()), 1500);
        setInterval(() => observer.next(this.weatherService.getWeathers()), 10000);
      });
      citiesChange.subscribe(
        (data: Weather[]) => { this.weathers = data; }
      );
    }
}
