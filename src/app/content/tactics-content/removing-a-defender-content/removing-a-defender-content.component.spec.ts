import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingADefenderContentComponent } from './removing-a-defender-content.component';

describe('RemovingADefenderContentComponent', () => {
  let component: RemovingADefenderContentComponent;
  let fixture: ComponentFixture<RemovingADefenderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovingADefenderContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovingADefenderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
