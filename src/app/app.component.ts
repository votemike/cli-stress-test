import { Component, OnInit } from '@angular/core';
import {Property} from "./property";
import {PropertyService} from "./property.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PropertyService],
})
export class AppComponent implements OnInit {
  constructor(private propertyService: PropertyService) {
  }

  properties: Property[];

  ngOnInit(): void {
    this.properties = this.propertyService.getProperties();
  }

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
}
