import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoxComponent } from './weather-box.component';

describe('WeatherBoxComponent', () => {
  let component: WeatherBoxComponent;
  let fixture: ComponentFixture<WeatherBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherBoxComponent]
    });
    fixture = TestBed.createComponent(WeatherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
