import {Component, Input} from '@angular/core';
import {Property} from '../property';

@Component({
  selector: 'app-property-summary',
  templateUrl: './property-summary.component.html',
  styleUrls: ['./property-summary.component.scss']
})
export class PropertySummaryComponent {

  @Input() properties: Property[];

  getPropertyCurrentTotal(): number {
    let teaserTotal = 0;
    this.properties.forEach(function (property) {
      teaserTotal += property.getCurrentMonthlyCost();
    });
    return teaserTotal;
  }

  getPropertyFullTotal(): number {
    let total = 0;
    this.properties.forEach(function (property) {
      total += property.getFullMonthlyCost();
    });
    return total;
  }

  getPropertyTotal(rate: number): number {
    let total = 0;
    this.properties.forEach(function (property) {
      total += property.getMonthlyCost(rate);
    });
    return total;
  }

  getPropertyCurrentIncome(): number {
    let incomeTotal = 0;
    this.properties.forEach(function (property) {
      incomeTotal += property.getCurrentNetIncome();
    });
    return incomeTotal;
  }

  getPropertyProperIncome(): number {
    let incomeTotal = 0;
    this.properties.forEach(function (property) {
      incomeTotal += property.getNetIncome(property.baseRate);
    });
    return incomeTotal;
  }

  getNetIncomeTotal(rate: number): number {
    let incomeTotal = 0;
    this.properties.forEach(function (property) {
      incomeTotal += property.getNetIncome(rate);
    });
    return incomeTotal;
  }
}
