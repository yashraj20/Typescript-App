import { Person } from './person';

function hello(person : Person) : string {
    return `Hello! ${person.firstname} ${person.lastname}`;
   }
   
   let person : Person = { 
    firstname : 'Yash',
    lastname : 'Raj'
   }
   
   console.log(hello(person));