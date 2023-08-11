import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shadow2Component } from './shadow2.component';

describe('Shadow2Component', () => {
  let component: Shadow2Component;
  let fixture: ComponentFixture<Shadow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shadow2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shadow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
