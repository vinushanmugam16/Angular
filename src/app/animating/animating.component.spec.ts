import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatingComponent } from './animating.component';

describe('AnimatingComponent', () => {
  let component: AnimatingComponent;
  let fixture: ComponentFixture<AnimatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatingComponent]
    });
    fixture = TestBed.createComponent(AnimatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
