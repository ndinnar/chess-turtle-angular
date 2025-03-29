import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobbyFischerContentComponent } from './bobby-fischer-content.component';

describe('BobbyFischerContentComponent', () => {
  let component: BobbyFischerContentComponent;
  let fixture: ComponentFixture<BobbyFischerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BobbyFischerContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobbyFischerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
