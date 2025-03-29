import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAGrandmasterContentComponent } from './what-is-a-grandmaster-content.component';

describe('WhatIsAGrandmasterContentComponent', () => {
  let component: WhatIsAGrandmasterContentComponent;
  let fixture: ComponentFixture<WhatIsAGrandmasterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsAGrandmasterContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsAGrandmasterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
