import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonSystemContentComponent } from './london-system-content.component';

describe('LondonSystemContentComponent', () => {
  let component: LondonSystemContentComponent;
  let fixture: ComponentFixture<LondonSystemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LondonSystemContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LondonSystemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
