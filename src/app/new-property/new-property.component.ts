import {Component, OnInit} from '@angular/core';
import {Property} from '../property';
import {PropertyService} from '../property.service';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
  propertyCount = 0;
  property = null;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.clearProperty();
  }

  onSubmit(): void {
    // @TODO disable form
    this.propertyService.addProperty(this.property).then(() => {
      this.propertyCount++;
      this.clearProperty();
      // @TODO Re-enable form
    });
  }

  private clearProperty(): void {
    const id = this.propertyCount + 1;
    this.property = new Property(id, 'Property ' + id, null, null, null, false);
  }
}
