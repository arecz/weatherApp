import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Weather } from './shared/weather.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {
    weatherChanged = new Subject<Weather[]>();

    constructor(private http: Http) {}

    private weathers: Weather[] = [
        
    ];

    getWeathers() {
            let array = [...this.weathers];
            const shuffledArray = this.shuffle(array);
            return shuffledArray;
    }

    addWeathers() {
        const woeidArr = [523920, 2459115, 638242, 505120, 44418];


        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D523920&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .map(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;

                return new Weather(city, temp, text);
            }
        ).subscribe(
            (data: any) => {
                this.weathers.push(data);
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2459115&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .map(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;

                return new Weather(city, temp, text);
            }
        ).subscribe(
            (data: any) => {
                this.weathers.push(data);
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D638242&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .map(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;

                return new Weather(city, temp, text);
            }
        ).subscribe(
            (data: any) => {
                this.weathers.push(data);
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D505120&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .map(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;

                return new Weather(city, temp, text);
            }
        ).subscribe(
            (data: any) => {
                this.weathers.push(data);
            }
        );
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .map(
            (response: Response) => {
                let data = response.json();
                let city = data.query.results.channel.location.city;
                let temp = data.query.results.channel.item.condition.temp;
                let text = data.query.results.channel.item.condition.text;

                return new Weather(city, temp, text);
            }
        ).subscribe(
            (data: any) => {
                this.weathers.push(data);
            }
        );
    }
    


    getWeather(index: number) {
        return this.weathers[index];

    }

    shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

}

