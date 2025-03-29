import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacrificesContentComponent } from './sacrifices-content.component';

describe('SacrificesContentComponent', () => {
  let component: SacrificesContentComponent;
  let fixture: ComponentFixture<SacrificesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacrificesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacrificesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
