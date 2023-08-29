import { WeatherApiService } from './services/weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'skycast';

  constructor(private weatherApiService: WeatherApiService ) {}

  ngOnInit(): void {
    this.weatherApiService.getWeatherData("new york")
    .subscribe({
      next: (resp) => {
        console.log(resp)
      }
    })
  }
}
