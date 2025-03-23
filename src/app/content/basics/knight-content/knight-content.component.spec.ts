import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightContentComponent } from './knight-content.component';

describe('KnightContentComponent', () => {
  let component: KnightContentComponent;
  let fixture: ComponentFixture<KnightContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnightContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
