import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingAndRookEndgamesContentComponent } from './king-and-rook-endgames-content.component';

describe('KingAndRookEndgamesContentComponent', () => {
  let component: KingAndRookEndgamesContentComponent;
  let fixture: ComponentFixture<KingAndRookEndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingAndRookEndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingAndRookEndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
