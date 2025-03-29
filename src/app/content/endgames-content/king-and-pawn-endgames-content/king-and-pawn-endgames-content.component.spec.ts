import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingAndPawnEndgamesContentComponent } from './king-and-pawn-endgames-content.component';

describe('KingAndPawnEndgamesContentComponent', () => {
  let component: KingAndPawnEndgamesContentComponent;
  let fixture: ComponentFixture<KingAndPawnEndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingAndPawnEndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingAndPawnEndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
