import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHotelComponent } from './the-hotel.component';

describe('TheHotelComponent', () => {
  let component: TheHotelComponent;
  let fixture: ComponentFixture<TheHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheHotelComponent]
    });
    fixture = TestBed.createComponent(TheHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
