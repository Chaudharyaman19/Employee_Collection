import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayworksComponent } from './todayworks.component';

describe('TodayworksComponent', () => {
  let component: TodayworksComponent;
  let fixture: ComponentFixture<TodayworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
