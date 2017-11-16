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
      this.weatherService.getWeathers();
      const weathersChange = Observable.create((observer: Observer<Weather[]>) => {
        setInterval(() => observer.next(this.weatherService.getWeathers()), 2000);
      });
      weathersChange.subscribe(
        (data: Weather[]) => { this.weathers = data }
      );
    }

    test() {
      console.log(this.weatherService.addWeathers());
  }



}
