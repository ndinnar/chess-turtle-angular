import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingContentComponent } from './king-content.component';

describe('KingContentComponent', () => {
  let component: KingContentComponent;
  let fixture: ComponentFixture<KingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
