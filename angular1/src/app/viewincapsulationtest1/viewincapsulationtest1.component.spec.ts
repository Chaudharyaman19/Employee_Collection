import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewincapsulationtest1Component } from './viewincapsulationtest1.component';

describe('Viewincapsulationtest1Component', () => {
  let component: Viewincapsulationtest1Component;
  let fixture: ComponentFixture<Viewincapsulationtest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewincapsulationtest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewincapsulationtest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
