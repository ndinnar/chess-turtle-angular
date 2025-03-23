import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsEloContentComponent } from './what-is-elo-content.component';

describe('WhatIsEloContentComponent', () => {
  let component: WhatIsEloContentComponent;
  let fixture: ComponentFixture<WhatIsEloContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsEloContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsEloContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
