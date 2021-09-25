//type definition file f/adapting js library, use files from definitely typed/npm
import faker from 'faker';
import { Mappable } from './CustomMap';

//if export like this then import using { User }
//implements tells ts to make sure this instance satisfies interface reqs
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'purple';

  //initilization
  //command click library to get pseudo documentation
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      //faker library returns string so convert with parseFloat
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>User: ${this.name}</h1>
    </div>

    `;
  }
}
