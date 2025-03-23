import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnStructureContentComponent } from './pawn-structure-content.component';

describe('PawnStructureContentComponent', () => {
  let component: PawnStructureContentComponent;
  let fixture: ComponentFixture<PawnStructureContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawnStructureContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnStructureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
