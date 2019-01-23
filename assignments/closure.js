// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function eat(food) {
  if(food == "cake"){
    return function(){
      return "eat salad tomorrow";
    }
  }
  else if (food == "soup") {
    return function() {
      return "eat meat tomorrow";
    }
  }
}

console.log(eat("cake"));
console.log(eat("soup"));

// ==== Challenge 2: Create a counter function ====
var set = 0;

const counter = () => {
    return function newCounter() {
      return set += 1;
    }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log(counter());
console.log(counter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
