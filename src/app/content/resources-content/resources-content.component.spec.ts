import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesContentComponent } from './resources-content.component';

describe('ResourcesContentComponent', () => {
  let component: ResourcesContentComponent;
  let fixture: ComponentFixture<ResourcesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
