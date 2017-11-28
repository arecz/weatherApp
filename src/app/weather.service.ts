import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Weather } from './shared/weather.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherService {

    changeCount = 0;
    woeidArr: Array<string> = ['523920', '2459115', '638242', '505120', '44418'];
    constructor(private http: Http) {}
    private weathers: Weather[] = [];

    subscribeWeathers(): Observable<Weather[]> {
        const linkStart = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D';
        const linkEnd = '%20and%20u%3D' + "'c'" + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        return Observable.interval(10000).startWith(0).switchMap(() => Observable.forkJoin([
            this.http.get(linkStart + this.woeidArr[0] + linkEnd).map(
                (response: Response) => this.responseCallback(response)
            ),
            this.http.get(linkStart + this.woeidArr[1] + linkEnd).map(
                (response: Response) => this.responseCallback(response)
            ),
            this.http.get(linkStart + this.woeidArr[2] + linkEnd).map(
                (response: Response) => this.responseCallback(response)
            ),
            this.http.get(linkStart + this.woeidArr[3] + linkEnd).map(
                (response: Response) => this.responseCallback(response)
            ),
            this.http.get(linkStart + this.woeidArr[4] + linkEnd).map(
                (response: Response) => this.responseCallback(response)
            )
            ]).map((data: Weather[]) => {
                console.log(data);
                if (this.changeCount === 5) {
                    this.changeCount = 0;
                    this.shuffle(this.woeidArr);
                } else {
                    this.changeCount++;
                    console.log(this.changeCount);
                }
                return this.weathers = [...data];
            })
        );
    }

    getWeather(index: number): Weather {
        return this.weathers[index];
    }

    private responseCallback(response: Response): Weather {
        const data = response.json();
        const city = data.query.results.channel.location.city;
        const temp = data.query.results.channel.item.condition.temp;
        const text = data.query.results.channel.item.condition.text;
        return new Weather(city, temp, text);
    }

    private shuffle(array) {
        let counter: number = array.length;
        while (counter > 0) {
            const index: number = Math.floor(Math.random() * counter);
            counter--;
            const temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
}

