import { Component, Input } from '@angular/core';
import {Property} from "../property";

@Component({
  selector: '[app-property]',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  @Input()
  property: Property;
}
