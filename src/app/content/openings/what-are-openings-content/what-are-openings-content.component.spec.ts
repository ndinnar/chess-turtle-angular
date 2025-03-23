import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreOpeningsContentComponent } from './what-are-openings-content.component';

describe('WhatAreOpeningsContentComponent', () => {
  let component: WhatAreOpeningsContentComponent;
  let fixture: ComponentFixture<WhatAreOpeningsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatAreOpeningsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAreOpeningsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
