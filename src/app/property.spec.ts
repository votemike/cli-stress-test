/* tslint:disable:no-unused-variable */

import {Property} from './property';

describe('Property', () => {
  it('should create an instance', () => {
    expect(new Property(1, '1', 1, 1, 1, false, 1)).toBeTruthy();
  });

  it('should calculate the monthly cost of an interest only mortgage', () => {
    const property = new Property(1, '1', 155000, 4.74, null, true, 1);
    expect(property.getMonthlyCost(3.84)).toBe(496.00);
  });

  // @TODO test for repayment mortgage with no months set

  it('should calculate the monthly cost of a repayment mortgage', () => {
    const property = new Property(1, '1', 195000, 2.19, 401, false, 1);
    expect(property.getMonthlyCost(2.19)).toBe(686.16);
  });

  it('should calculate the current monthly cost of an interest only mortgage using teaser rate', () => {
    const property = new Property(1, '1', 155000, 4.74, null, true, 1, 3.84);
    expect(property.getCurrentMonthlyCost()).toBe(496.00);
  });

  it('should calculate the current monthly cost of an interest only mortgage without the teaser rate', () => {
    const property = new Property(1, '1', 155000, 4.74, null, true, 1);
    expect(property.getCurrentMonthlyCost()).toBe(612.25);
  });

  it('should calculate the full monthly cost of an interest only mortgage without using the teaser rate', () => {
    const property = new Property(1, '1', 155000, 4.74, null, true, 1, 3.84);
    expect(property.getFullMonthlyCost()).toBe(612.25);
  });

  it('should calculate the current monthly cost of a repayment mortgage using teaser rate', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 1, 2.19);
    expect(property.getCurrentMonthlyCost()).toBe(686.16);
  });

  it('should calculate the current monthly cost of a repayment mortgage without the teaser rate', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 1);
    expect(property.getCurrentMonthlyCost()).toBe(882.32);
  });

  it('should calculate the full monthly cost of a repayment mortgage without using the teaser rate', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 1, 2.19);
    expect(property.getFullMonthlyCost()).toBe(882.32);
  });

  it('should calculate the current monthly net income of a mortgage without the teaser rate', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 800);
    expect(property.getCurrentNetIncome()).toBe(-82.32);
  });

  it('should calculate the current monthly net income of a mortgage using the teaser rate', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 900, 2.19);
    expect(property.getCurrentNetIncome()).toBe(213.84);
  });

  it('should calculate the monthly net income of a repayment mortgage', () => {
    const property = new Property(1, '1', 195000, 4.00, 401, false, 1000);
    expect(property.getNetIncome(10)).toBe(-685.46);
  });

  it('should calculate the monthly net income of an interest only mortgage', () => {
    const property = new Property(1, '1', 155000, 4.84, null, true, 400);
    expect(property.getNetIncome(15)).toBe(-1537.50);
  });
});
