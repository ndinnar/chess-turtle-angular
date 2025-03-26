import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealedAttackContentComponent } from './revealed-attack-content.component';

describe('RevealedAttackContentComponent', () => {
  let component: RevealedAttackContentComponent;
  let fixture: ComponentFixture<RevealedAttackContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealedAttackContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevealedAttackContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
