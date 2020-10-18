var a = 2; //local
// declare a
// set a value is 2
b = 3; //global

newVariable();

function newVariable() {
  //C's scope is function scope
  //   var c = 4;

  //Now C's scope is global
  c = 4;
  console.log("inside", c);
}

console.log("outside", c);


/*
* 
*const - can't change variable(stack)
*var - function scope
*let - block scope
*
*
*/

const newFunc = function () {
    console.log("New Function");
}