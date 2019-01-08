import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdaftarPage } from './formdaftar.page';

describe('FormdaftarPage', () => {
  let component: FormdaftarPage;
  let fixture: ComponentFixture<FormdaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
