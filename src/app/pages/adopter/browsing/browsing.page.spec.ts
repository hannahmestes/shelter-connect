import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingPage } from './browsing.page';

describe('BrowsingPage', () => {
  let component: BrowsingPage;
  let fixture: ComponentFixture<BrowsingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
