import { WeatherData } from './modules/weather.module';
import { WeatherApiService } from './services/weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'skycast';
  weatherData?: WeatherData;

  constructor(private weatherApiService: WeatherApiService) {}


  
  onsubmit(event: any) {
    this.getCityWeather(event.target.cityNameInput.value);

  }

  ngOnInit(): void {
      this.getCityWeather("new york")
  }

  getCityWeather(cityName : string){
      this.weatherApiService.getWeatherData(cityName).subscribe({
        next: (resp) => {
          this.weatherData = resp;
          console.log(resp);
        },
      });
  }
}
