import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectionPage } from './user-selection.page';

describe('UserSelectionPage', () => {
  let component: UserSelectionPage;
  let fixture: ComponentFixture<UserSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
