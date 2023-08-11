import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringEmployeeListComponent } from './spring-employee-list.component';

describe('SpringEmployeeListComponent', () => {
  let component: SpringEmployeeListComponent;
  let fixture: ComponentFixture<SpringEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
