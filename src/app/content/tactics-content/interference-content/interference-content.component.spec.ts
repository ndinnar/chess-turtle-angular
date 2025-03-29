import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceContentComponent } from './interference-content.component';

describe('InterferenceContentComponent', () => {
  let component: InterferenceContentComponent;
  let fixture: ComponentFixture<InterferenceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterferenceContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterferenceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
