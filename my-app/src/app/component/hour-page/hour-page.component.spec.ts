import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourPageComponent } from './hour-page.component';

describe('HourPageComponent', () => {
  let component: HourPageComponent;
  let fixture: ComponentFixture<HourPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourPageComponent]
    });
    fixture = TestBed.createComponent(HourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
