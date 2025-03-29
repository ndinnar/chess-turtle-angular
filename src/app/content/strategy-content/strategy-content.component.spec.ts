import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyContentComponent } from './strategy-content.component';

describe('StrategyContentComponent', () => {
  let component: StrategyContentComponent;
  let fixture: ComponentFixture<StrategyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
