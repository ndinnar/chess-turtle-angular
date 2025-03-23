import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbalancesContentComponent } from './imbalances-content.component';

describe('ImbalancesContentComponent', () => {
  let component: ImbalancesContentComponent;
  let fixture: ComponentFixture<ImbalancesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbalancesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbalancesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
