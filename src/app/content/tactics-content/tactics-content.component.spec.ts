import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticsContentComponent } from './tactics-content.component';

describe('TacticsContentComponent', () => {
  let component: TacticsContentComponent;
  let fixture: ComponentFixture<TacticsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacticsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacticsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
