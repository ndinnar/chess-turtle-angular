import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesparadoContentComponent } from './desparado-content.component';

describe('DesparadoContentComponent', () => {
  let component: DesparadoContentComponent;
  let fixture: ComponentFixture<DesparadoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesparadoContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesparadoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
