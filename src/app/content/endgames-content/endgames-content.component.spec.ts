import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgamesContentComponent } from './endgames-content.component';

describe('EndgamesContentComponent', () => {
  let component: EndgamesContentComponent;
  let fixture: ComponentFixture<EndgamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndgamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndgamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
