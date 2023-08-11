import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringprojComponent } from './springproj.component';

describe('SpringprojComponent', () => {
  let component: SpringprojComponent;
  let fixture: ComponentFixture<SpringprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
