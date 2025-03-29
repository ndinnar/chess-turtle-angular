import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandmastersContentComponent } from './grandmasters-content.component';

describe('GrandmastersContentComponent', () => {
  let component: GrandmastersContentComponent;
  let fixture: ComponentFixture<GrandmastersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandmastersContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandmastersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
