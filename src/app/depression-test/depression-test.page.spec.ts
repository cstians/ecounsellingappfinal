import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionTestPage } from './depression-test.page';

describe('DepressionTestPage', () => {
  let component: DepressionTestPage;
  let fixture: ComponentFixture<DepressionTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressionTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepressionTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
