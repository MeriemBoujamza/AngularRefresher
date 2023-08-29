import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../modules/weather.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) {

   }


  getWeatherData(cityName : string) : Observable<WeatherData> {

    return this.http.get<WeatherData>(
      'https://weatherapi-com.p.rapidapi.com/current.json',
      {
        headers: new HttpHeaders()
          .set(
            'X-RapidAPI-Key',
            'b585571fc8msha2d6558a951a226p1d7e54jsn60f3e0940558'
          )
          .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),

        params: new HttpParams().set('q', cityName),
      }
    );

  }
}
