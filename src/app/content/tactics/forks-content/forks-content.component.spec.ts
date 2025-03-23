import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForksContentComponent } from './forks-content.component';

describe('ForksContentComponent', () => {
  let component: ForksContentComponent;
  let fixture: ComponentFixture<ForksContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForksContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
