/**
 * JS is:
 * Single thread
 * Asynchronous
 * Weakly-type
 * LIFO
 *
 */
function numberOne() {
    console.log(1);
  }
  function numberTwo() {
    console.log(2);
  }
  function numberThree() {
    console.log(3);
  }
  function numberFour() {
    console.log(4);
  }
  function numberFive() {
    console.log(5);
  }
  
  numberOne();
  numberTwo();
  numberThree();
  setTimeout(numberFour, 0);
  numberFive();
  setTimeout(numberFour, 0);
  numberFive();
  