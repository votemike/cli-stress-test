/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertySummaryComponent } from './property-summary.component';
import {Property} from '../property';

describe('PropertySummaryComponent', () => {
  let component: PropertySummaryComponent;
  let fixture: ComponentFixture<PropertySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySummaryComponent);
    component = fixture.componentInstance;

    component.properties = [
      new Property(1, 'Test', 1, 1, 1, false, 1, 1),
      new Property(1, 'Test2', 1, 1, 1, false, 1, 1)
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
