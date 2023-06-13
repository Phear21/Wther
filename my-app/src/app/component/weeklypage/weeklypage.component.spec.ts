import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklypageComponent } from './weeklypage.component';

describe('WeeklypageComponent', () => {
  let component: WeeklypageComponent;
  let fixture: ComponentFixture<WeeklypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklypageComponent]
    });
    fixture = TestBed.createComponent(WeeklypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
