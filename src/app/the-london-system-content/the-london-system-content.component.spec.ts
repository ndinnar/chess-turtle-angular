import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLondonSystemContentComponent } from './the-london-system-content.component';

describe('TheLondonSystemContentComponent', () => {
  let component: TheLondonSystemContentComponent;
  let fixture: ComponentFixture<TheLondonSystemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLondonSystemContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheLondonSystemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
