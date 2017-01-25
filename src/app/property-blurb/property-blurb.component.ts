import {Component, Input} from '@angular/core';
import {Property} from '../property';

@Component({
  selector: 'app-property-blurb',
  templateUrl: './property-blurb.component.html',
  styleUrls: ['./property-blurb.component.scss']
})
export class PropertyBlurbComponent {

  @Input() property: Property;
}
