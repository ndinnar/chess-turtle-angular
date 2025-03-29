import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsContentComponent } from './pins-content.component';

describe('PinsContentComponent', () => {
  let component: PinsContentComponent;
  let fixture: ComponentFixture<PinsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
