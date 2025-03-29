import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsStrategyContentComponent } from './what-is-strategy-content.component';

describe('WhatIsStrategyContentComponent', () => {
  let component: WhatIsStrategyContentComponent;
  let fixture: ComponentFixture<WhatIsStrategyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsStrategyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsStrategyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
