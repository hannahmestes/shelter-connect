import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalPage } from './add-animal.page';

describe('AddAnimalPage', () => {
  let component: AddAnimalPage;
  let fixture: ComponentFixture<AddAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
