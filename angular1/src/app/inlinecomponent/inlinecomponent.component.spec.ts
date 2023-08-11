import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinecomponentComponent } from './inlinecomponent.component';

describe('InlinecomponentComponent', () => {
  let component: InlinecomponentComponent;
  let fixture: ComponentFixture<InlinecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
