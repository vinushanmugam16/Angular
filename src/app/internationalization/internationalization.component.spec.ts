import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalizationComponent } from './internationalization.component';

describe('InternationalizationComponent', () => {
  let component: InternationalizationComponent;
  let fixture: ComponentFixture<InternationalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalizationComponent]
    });
    fixture = TestBed.createComponent(InternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
