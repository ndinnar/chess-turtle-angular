import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZugswangContentComponent } from './zugswang-content.component';

describe('ZugswangContentComponent', () => {
  let component: ZugswangContentComponent;
  let fixture: ComponentFixture<ZugswangContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZugswangContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZugswangContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
