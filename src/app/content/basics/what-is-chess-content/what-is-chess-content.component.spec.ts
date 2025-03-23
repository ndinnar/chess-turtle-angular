import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsChessContentComponent } from './what-is-chess-content.component';

describe('WhatIsChessContentComponent', () => {
  let component: WhatIsChessContentComponent;
  let fixture: ComponentFixture<WhatIsChessContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsChessContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsChessContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
