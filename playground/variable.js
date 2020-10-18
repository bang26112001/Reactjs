// JS TYPE
/*
 **** Primitive Value
 * String
 * Number
 * Boolean
 *
 **** Complex
 * Undefined
 * Object
 * Null
 * Function
 *
 */

//  primitive
var a = "day la chuoi";
// Value will be store on Stack

// Complex

var b = { name: "phuc" };
// Value will be store on HEAP
// On Stack will store Address

//===================================OBJECT
const person = {
  name: "Phuc",
  age: 3,
  carrier: {
    name: "Developer",
    company: "Dirox",
    obj: {},
  },
};

const new_person = {
  ...person,

  // spread operator //ES6
  /**
     *  name: "Phuc",
        age: 3,
        carrier: asd2s
     */
  carrier: {
    ...person.carrier,
  },
};
// lodash
console.log(new_person);
//clone deep
person.carrier.name = "Teacher";
console.log(new_person);

// var array = [1, 2, 3];
// var new_array = [...array];
// console.log(new_array);
// new_array.push(5);
// console.log(array);
// console.log(new_array);

// console.log(new_person);
// setValue("name", "Tuan");
// console.log(person);
// console.log(new_person);

function getValue(property) {
  //input person's property
  //output person's property value
  return person[property];
}
// console.log(getValue("age"));
// inRa("name")=>"Phuc"
// inRa("age")=>3

function setValue(property, value) {
  person[property] = value;
  return person;
  //setValue("name","Tuan") => person {name:"Tuan",age:3}
  //setValue("HObbies",[1,2,3]) => person {name:"Tuan",age:3,hobbies:[1,2,3]}
}
