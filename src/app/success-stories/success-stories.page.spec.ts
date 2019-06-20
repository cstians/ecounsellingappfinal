import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoriesPage } from './success-stories.page';

describe('SuccessStoriesPage', () => {
  let component: SuccessStoriesPage;
  let fixture: ComponentFixture<SuccessStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
