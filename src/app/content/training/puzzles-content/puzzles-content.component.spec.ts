import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlesContentComponent } from './puzzles-content.component';

describe('PuzzlesContentComponent', () => {
  let component: PuzzlesContentComponent;
  let fixture: ComponentFixture<PuzzlesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzlesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzlesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
