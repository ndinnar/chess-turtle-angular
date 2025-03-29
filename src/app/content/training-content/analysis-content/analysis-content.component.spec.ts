import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisContentComponent } from './analysis-content.component';

describe('AnalysisContentComponent', () => {
  let component: AnalysisContentComponent;
  let fixture: ComponentFixture<AnalysisContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
