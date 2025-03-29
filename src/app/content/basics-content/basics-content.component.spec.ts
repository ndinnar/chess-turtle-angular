import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsContentComponent } from './basics-content.component';

describe('BasicsContentComponent', () => {
  let component: BasicsContentComponent;
  let fixture: ComponentFixture<BasicsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
