import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-width-main',
  templateUrl: './weather-width-main.component.html',
  styleUrls: ['./weather-width-main.component.css'],
})
export class WeatherWidthMainComponent implements OnInit {
  weatherdata: any;
  constructor() {}

  ngOnInit(): void {
    this.weatherdata = {
      main: {},
      isDay: true,
    };
    this.getweatherdata();
    console.log(this.weatherdata);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getweatherdata() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}'
      // .than((response: { json: () => any }) => response.json())
      // .then((data: any) => {
      // this.setweatherdata(data);
      // })
    );

    let data = JSON.parse(
      '{"coord": {"lon": 10.99,"lat": 44.34},"weather": [ { "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" } ], "base": "stations", "main": { "temp": 298.48, "feels_like": 298.74, "temp_min": 297.56, "temp_max": 300.05, "pressure": 1015,"humidity": 64,"sea_level": 1015,"grnd_level": 933}, "visibility": 10000, "wind": {"speed": 0.62, "deg": 349, "gust": 1.18 },"rain": {  "1h": 3.16},"clouds": { "all": 100},"dt": 1661870592, "sys": {"type": 2,"id": 2075663,"country": "IT","sunrise": 1661834187, "sunset": 1661882248},"timezone": 7200, "id": 3163858, "name": "Noida", "cod": 200}  '
    );

    this.setweatherdata(data);
  }
  setweatherdata(data: any) {
    this.weatherdata = data;
    let sunsetTime = new Date(this.weatherdata.sys.sunset * 1000);
    this.weatherdata.sunset_Time = sunsetTime.toLocaleTimeString();
    let currentdate = new Date();
    this.weatherdata.isDay = currentdate.getTime() < sunsetTime.getTime();
    this.weatherdata.temp_celcius = (
      this.weatherdata.main.temp - 273.15
    ).toFixed(0);
    this.weatherdata.temp_min = (
      this.weatherdata.main.temp_min - 273.15
    ).toFixed(0);
    this.weatherdata.temp_max = (
      this.weatherdata.main.temp_max - 273.15
    ).toFixed(0);
    this.weatherdata.temp_feels_like = (
      this.weatherdata.main.feels_like - 273.15
    ).toFixed(0);
  }
}
