import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Weather } from './shared/weather.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    private weathers: Weather[] = [];

    getWeathers() {
            const array = [...this.weathers];
            const shuffledArray = this.shuffle(array);
            console.log(shuffledArray);
            return shuffledArray;
    }

    addWeathers() {
        let array = this.weathers.slice();
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D523920&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .subscribe(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;
                return array.push(new Weather(city, temp, text));
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2459115&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .subscribe(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;
                return array.push(new Weather(city, temp, text));
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D638242&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .subscribe(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;
                return array.push(new Weather(city, temp, text));
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D505120&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .subscribe(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;
                return array.push(new Weather(city, temp, text));
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .subscribe(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;
                return array.push(new Weather(city, temp, text));
            }
        );
        return this.weathers = array;
    }

    getWeather(index: number) {
        return this.weathers[index];

    }

    shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);

            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
}

