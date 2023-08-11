import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewincapluation2Component } from './viewincapluation2.component';

describe('Viewincapluation2Component', () => {
  let component: Viewincapluation2Component;
  let fixture: ComponentFixture<Viewincapluation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewincapluation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewincapluation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
