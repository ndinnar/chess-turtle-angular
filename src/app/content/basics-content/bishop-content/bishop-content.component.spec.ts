import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishopContentComponent } from './bishop-content.component';

describe('BishopContentComponent', () => {
  let component: BishopContentComponent;
  let fixture: ComponentFixture<BishopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BishopContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BishopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
