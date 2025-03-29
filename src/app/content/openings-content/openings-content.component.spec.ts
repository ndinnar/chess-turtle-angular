import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsContentComponent } from './openings-content.component';

describe('OpeningsContentComponent', () => {
  let component: OpeningsContentComponent;
  let fixture: ComponentFixture<OpeningsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
