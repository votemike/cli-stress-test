import {Component, OnInit} from '@angular/core';
import {Property} from './property';
import {PropertyService} from './property.service';
// import * as Chart from 'chart';
// import 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PropertyService],
})
export class AppComponent implements OnInit {

  title: string = 'Property Stress Test';
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.propertyService.getProperties().then(properties => this.properties = properties);
    // var myChart = new Chart();
    // console.log(myChart);
  }
}
