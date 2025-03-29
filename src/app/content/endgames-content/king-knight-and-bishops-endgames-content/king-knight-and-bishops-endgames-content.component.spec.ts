import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingKnightAndBishopsEndgamesContentComponent } from './king-knight-and-bishops-endgames-content.component';

describe('KingKnightAndBishopsEndgamesContentComponent', () => {
  let component: KingKnightAndBishopsEndgamesContentComponent;
  let fixture: ComponentFixture<KingKnightAndBishopsEndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingKnightAndBishopsEndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingKnightAndBishopsEndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
