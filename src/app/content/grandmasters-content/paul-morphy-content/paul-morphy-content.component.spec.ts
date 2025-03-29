import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulMorphyContentComponent } from './paul-morphy-content.component';

describe('PaulMorphyContentComponent', () => {
  let component: PaulMorphyContentComponent;
  let fixture: ComponentFixture<PaulMorphyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaulMorphyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaulMorphyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
