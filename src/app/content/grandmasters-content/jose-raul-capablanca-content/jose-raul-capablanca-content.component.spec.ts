import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseRaulCapablancaContentComponent } from './jose-raul-capablanca-content.component';

describe('JoseRaulCapablancaContentComponent', () => {
  let component: JoseRaulCapablancaContentComponent;
  let fixture: ComponentFixture<JoseRaulCapablancaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoseRaulCapablancaContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoseRaulCapablancaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
