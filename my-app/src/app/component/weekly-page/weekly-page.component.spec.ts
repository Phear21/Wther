import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPageComponent } from './weekly-page.component';

describe('WeeklyPageComponent', () => {
  let component: WeeklyPageComponent;
  let fixture: ComponentFixture<WeeklyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyPageComponent]
    });
    fixture = TestBed.createComponent(WeeklyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
