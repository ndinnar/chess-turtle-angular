import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRegimentContentComponent } from './training-regiment-content.component';

describe('TrainingRegimentContentComponent', () => {
  let component: TrainingRegimentContentComponent;
  let fixture: ComponentFixture<TrainingRegimentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingRegimentContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingRegimentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
