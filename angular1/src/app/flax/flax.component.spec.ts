import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaxComponent } from './flax.component';

describe('FlaxComponent', () => {
  let component: FlaxComponent;
  let fixture: ComponentFixture<FlaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
