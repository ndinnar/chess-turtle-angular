import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewersContentComponent } from './skewers-content.component';

describe('SkewersContentComponent', () => {
  let component: SkewersContentComponent;
  let fixture: ComponentFixture<SkewersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkewersContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkewersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
