import { Weather } from './shared/weather.model';

export class WeatherService {

    private weathers: Weather[] = [
        new Weather('Warsaw', '32', 'Sunny'),
        new Weather('Berlin', '20', 'Cloudy'),
        new Weather('Lodz', '2', 'Sunny'),
        new Weather('New York', '40', 'Heat'),
        new Weather('London', '13', 'Rainy'),
    ];

    getWeathers() {
        const shuffledArray = this.shuffle(this.weathers);
        return shuffledArray.slice(2);
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

