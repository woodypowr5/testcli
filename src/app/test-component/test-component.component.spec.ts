/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TestComponentComponent } from './test-component.component';

describe('Component: TestComponent', () => {
  it('should create an instance', () => {
    let component = new TestComponentComponent();
    expect(component).toBeTruthy();
  });
});
