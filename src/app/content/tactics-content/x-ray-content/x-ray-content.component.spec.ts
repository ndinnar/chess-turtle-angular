import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XRayContentComponent } from './x-ray-content.component';

describe('XRayContentComponent', () => {
  let component: XRayContentComponent;
  let fixture: ComponentFixture<XRayContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XRayContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XRayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
