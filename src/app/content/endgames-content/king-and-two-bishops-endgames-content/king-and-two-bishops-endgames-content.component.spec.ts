import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingAndTwoBishopsEndgamesContentComponent } from './king-and-two-bishops-endgames-content.component';

describe('KingAndTwoBishopsEndgamesContentComponent', () => {
  let component: KingAndTwoBishopsEndgamesContentComponent;
  let fixture: ComponentFixture<KingAndTwoBishopsEndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingAndTwoBishopsEndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingAndTwoBishopsEndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
