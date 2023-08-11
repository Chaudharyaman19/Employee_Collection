import { WeatherService } from './../weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather2',
  templateUrl: './weather2.component.html',
  styleUrls: ['./weather2.component.css'],
})
export class Weather2Component {
  lat: any;
  lon: any;
  wheather: any;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getlocation();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getlocation() {
    if ('Geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getweather(this.lat, this.lon).subscribe((data) => {
          this.wheather = data;
        });
      });
    }
  }
}
