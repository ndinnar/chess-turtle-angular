import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmatePatternsContentComponent } from './checkmate-patterns-content.component';

describe('CheckmatePatternsContentComponent', () => {
  let component: CheckmatePatternsContentComponent;
  let fixture: ComponentFixture<CheckmatePatternsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckmatePatternsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckmatePatternsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
