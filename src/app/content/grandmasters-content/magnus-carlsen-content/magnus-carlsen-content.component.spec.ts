import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnusCarlsenContentComponent } from './magnus-carlsen-content.component';

describe('MagnusCarlsenContentComponent', () => {
  let component: MagnusCarlsenContentComponent;
  let fixture: ComponentFixture<MagnusCarlsenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnusCarlsenContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnusCarlsenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
