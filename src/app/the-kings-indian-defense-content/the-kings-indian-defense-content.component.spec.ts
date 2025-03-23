import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheKingsIndianDefenseContentComponent } from './the-kings-indian-defense-content.component';

describe('TheKingsIndianDefenseContentComponent', () => {
  let component: TheKingsIndianDefenseContentComponent;
  let fixture: ComponentFixture<TheKingsIndianDefenseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheKingsIndianDefenseContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheKingsIndianDefenseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
