import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnStormsContentComponent } from './pawn-storms-content.component';

describe('PawnStormsContentComponent', () => {
  let component: PawnStormsContentComponent;
  let fixture: ComponentFixture<PawnStormsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawnStormsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnStormsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
