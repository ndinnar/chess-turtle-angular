import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwischenzugContentComponent } from './zwischenzug-content.component';

describe('ZwischenzugContentComponent', () => {
  let component: ZwischenzugContentComponent;
  let fixture: ComponentFixture<ZwischenzugContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZwischenzugContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZwischenzugContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
