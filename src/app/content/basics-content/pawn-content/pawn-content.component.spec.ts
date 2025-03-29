import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnContentComponent } from './pawn-content.component';

describe('PawnContentComponent', () => {
  let component: PawnContentComponent;
  let fixture: ComponentFixture<PawnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawnContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
