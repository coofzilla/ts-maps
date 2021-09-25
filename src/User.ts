//type definition file f/adapting js library, use files from definitely typed/npm
import faker from 'faker';

//if export like this then import using { User }
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
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
    return `User: ${this.name}`;
  }
}
