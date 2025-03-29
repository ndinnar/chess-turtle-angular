import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcingStalemateContentComponent } from './forcing-stalemate-content.component';

describe('ForcingStalemateContentComponent', () => {
  let component: ForcingStalemateContentComponent;
  let fixture: ComponentFixture<ForcingStalemateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcingStalemateContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcingStalemateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
