import { Component } from '@angular/core';
import {Property} from "../property";
import {PropertyService} from "../property.service";

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent {

  constructor(
      private propertyService: PropertyService) { }

  property = new Property(1, 'Property 1', null, null, null, false);

  onSubmit() {
    this.propertyService.addProperty(this.property);
    let propertyCount = this.propertyService.getProperties().length + 1;
    this.property = new Property(propertyCount, 'Property '+ propertyCount, null, null, null, false);
  }
}
