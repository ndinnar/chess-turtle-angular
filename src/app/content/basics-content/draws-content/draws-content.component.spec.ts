import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawsContentComponent } from './draws-content.component';

describe('DrawsContentComponent', () => {
  let component: DrawsContentComponent;
  let fixture: ComponentFixture<DrawsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
