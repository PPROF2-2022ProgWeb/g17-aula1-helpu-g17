/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina404Component } from './pagina404.component';

describe('Pagina404Component', () => {
  let component: Pagina404Component;
  let fixture: ComponentFixture<Pagina404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
