import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientModuleComponent } from './httpclient-module.component';

describe('HttpclientModuleComponent', () => {
  let component: HttpclientModuleComponent;
  let fixture: ComponentFixture<HttpclientModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpclientModuleComponent]
    });
    fixture = TestBed.createComponent(HttpclientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
