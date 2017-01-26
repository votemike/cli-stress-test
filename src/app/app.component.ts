import { Component, OnInit } from '@angular/core';
import {Property} from './property';
import {PropertyService} from './property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PropertyService],
})
export class AppComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().then(properties => this.properties = properties);
  }
}
