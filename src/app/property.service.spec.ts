/* tslint:disable:no-unused-variable */

import { PropertyService } from './property.service';

it('getProperties should return empty array', done => {
  const service = new PropertyService();
  service.getProperties().then(value => {
    expect(value).toEqual([]);
    done();
  });
});
