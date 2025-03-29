import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingAndQueenEndgamesContentComponent } from './king-and-queen-endgames-content.component';

describe('KingAndQueenEndgamesContentComponent', () => {
  let component: KingAndQueenEndgamesContentComponent;
  let fixture: ComponentFixture<KingAndQueenEndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingAndQueenEndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingAndQueenEndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
