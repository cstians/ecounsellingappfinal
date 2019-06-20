import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionManualPage } from './instruction-manual.page';

describe('InstructionManualPage', () => {
  let component: InstructionManualPage;
  let fixture: ComponentFixture<InstructionManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionManualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
