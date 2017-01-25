/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyBlurbComponent } from './property-blurb.component';
import {Property} from '../property';

describe('PropertyBlurbComponent', () => {
  let component: PropertyBlurbComponent;
  let fixture: ComponentFixture<PropertyBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBlurbComponent);
    component = fixture.componentInstance;

    component.property = new Property(1, 'Test', 1, 1, 1, false, 1, 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
