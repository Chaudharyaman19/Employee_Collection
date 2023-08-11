import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidthMainComponent } from './weather-width-main.component';

describe('WeatherWidthMainComponent', () => {
  let component: WeatherWidthMainComponent;
  let fixture: ComponentFixture<WeatherWidthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWidthMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWidthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
