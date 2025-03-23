import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksAndCheckmatesContentComponent } from './checks-and-checkmates-content.component';

describe('ChecksAndCheckmatesContentComponent', () => {
  let component: ChecksAndCheckmatesContentComponent;
  let fixture: ComponentFixture<ChecksAndCheckmatesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecksAndCheckmatesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksAndCheckmatesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
