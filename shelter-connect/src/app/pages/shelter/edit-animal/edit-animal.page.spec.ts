import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalPage } from './edit-animal.page';

describe('EditAnimalPage', () => {
  let component: EditAnimalPage;
  let fixture: ComponentFixture<EditAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
