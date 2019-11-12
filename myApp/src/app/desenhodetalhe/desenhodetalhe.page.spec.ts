import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhodetalhePage } from './desenhodetalhe.page';

describe('DesenhodetalhePage', () => {
  let component: DesenhodetalhePage;
  let fixture: ComponentFixture<DesenhodetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenhodetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhodetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
