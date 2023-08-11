import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = '4fc0ee51a7caa89850ad17524d28c8e9';
  url = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}
  getweather(lat: any, lon: any) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }
  getweathercityname(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }
}
