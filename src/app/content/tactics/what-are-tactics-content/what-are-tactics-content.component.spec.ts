import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreTacticsContentComponent } from './what-are-tactics-content.component';

describe('WhatAreTacticsContentComponent', () => {
  let component: WhatAreTacticsContentComponent;
  let fixture: ComponentFixture<WhatAreTacticsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatAreTacticsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAreTacticsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
