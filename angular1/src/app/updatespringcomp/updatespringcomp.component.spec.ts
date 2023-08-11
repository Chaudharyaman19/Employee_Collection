import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespringcompComponent } from './updatespringcomp.component';

describe('UpdatespringcompComponent', () => {
  let component: UpdatespringcompComponent;
  let fixture: ComponentFixture<UpdatespringcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatespringcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatespringcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
