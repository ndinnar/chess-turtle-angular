import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsIndianDefenseContentComponent } from './kings-indian-defense-content.component';

describe('KingsIndianDefenseContentComponent', () => {
  let component: KingsIndianDefenseContentComponent;
  let fixture: ComponentFixture<KingsIndianDefenseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingsIndianDefenseContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingsIndianDefenseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
