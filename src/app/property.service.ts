import {Injectable} from "@angular/core";
import {Property} from "./property";

const PROPERTIES: Property[] = [];

@Injectable()
export class PropertyService {
    addProperty(property: Property) {
        PROPERTIES.push(property);
    }

    getProperties(): Property[] {
        return PROPERTIES;
    }
}
