import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarryKasparovContentComponent } from './garry-kasparov-content.component';

describe('GarryKasparovContentComponent', () => {
  let component: GarryKasparovContentComponent;
  let fixture: ComponentFixture<GarryKasparovContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarryKasparovContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarryKasparovContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
