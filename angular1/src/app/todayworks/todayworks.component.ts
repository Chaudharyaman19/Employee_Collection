import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-todayworks',
  templateUrl: './todayworks.component.html',
  styleUrls: ['./todayworks.component.css'],
})
export class TodayworksComponent {
  lat: any;
  lon: any;
  wheather: any;
  weather: any;
  weatherdata: any;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getlocation();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getlocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService
          .getweather(this.lat, this.lon)
          .subscribe((data: any) => {
            this.weather = data;
          });
      });
    }
  }
  getCity(city: string) {
    this.weatherService.getweathercityname(city).subscribe((data) => {
      this.weather = data;
    });
  }
}
