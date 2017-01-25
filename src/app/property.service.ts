import {Injectable} from '@angular/core';
import {Property} from './property';

const PROPERTIES: Property[] = [];

@Injectable()
export class PropertyService {
    addProperty(property: Property): Promise<void> {
      PROPERTIES.push(property);
      return Promise.resolve();
    }

    getProperties(): Promise<Property[]> {
      return Promise.resolve(PROPERTIES);
    }
}
