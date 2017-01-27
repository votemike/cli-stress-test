import { Component, Input } from '@angular/core';
import {Property} from '../property';

@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent {

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
}
