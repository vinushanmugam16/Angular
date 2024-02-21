import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbspageComponent } from './verbspage.component';

describe('VerbspageComponent', () => {
  let component: VerbspageComponent;
  let fixture: ComponentFixture<VerbspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerbspageComponent]
    });
    fixture = TestBed.createComponent(VerbspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
