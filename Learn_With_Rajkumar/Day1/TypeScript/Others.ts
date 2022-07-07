// import { Customer } from './Folder/Customer';
// import User from './Folder/User';

import {Customer, User} from './Folder';

// Union Data Types
let nameOrAge: number | string | Boolean = "";

nameOrAge = "Virtusa";
nameOrAge = 100 * 2;

// Tuple
let customer:[number,string,Date,User] = [123,"Test",new Date(),{id:1,name:"test123"}];

customer[1] = "abcd";
customer[0] = 12;

customer[3] = {

    id:45,
    name:"New Name"

}

// any keyword. Any category
let data:any = "";
data = 100;
console.log(data * 2);

data = "String Data";
console.log(`${data} is a new data`)