import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildaftarPage } from './detaildaftar.page';

describe('DetaildaftarPage', () => {
  let component: DetaildaftarPage;
  let fixture: ComponentFixture<DetaildaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
