//start up w/ parcel index.html
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const userTwo = new User();
const company = new Company();
const customMap = new CustomMap('map');


customMap.addMarker(user);
customMap.addMarker(userTwo);
customMap.addMarker(company);
