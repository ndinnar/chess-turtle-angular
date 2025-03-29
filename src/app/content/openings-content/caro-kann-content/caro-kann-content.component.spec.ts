import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroKannContentComponent } from './caro-kann-content.component';

describe('CaroKannContentComponent', () => {
  let component: CaroKannContentComponent;
  let fixture: ComponentFixture<CaroKannContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroKannContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroKannContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
