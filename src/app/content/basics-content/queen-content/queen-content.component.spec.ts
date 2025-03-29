import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenContentComponent } from './queen-content.component';

describe('QueenContentComponent', () => {
  let component: QueenContentComponent;
  let fixture: ComponentFixture<QueenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueenContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
