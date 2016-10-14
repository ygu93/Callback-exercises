
class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
  }

  _tick() {
    this.seconds += 1;
    if(this.seconds === 60){
      this.minutes += 1;
      this.seconds = 0;
    }
    else if(this.minutes === 60){
      this.hours += 1;
      this.minutes = 0;
    }
    else if(this.hours === 24){
      this.hours = 0;
    }
    this.printTime();
  }
}

// const clock = new Clock();

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sums, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Give a number", (answer) => {
      let num = parseInt(answer, 10);
      let sum = sums += num;
      console.log(`The current sum is ${sum}`);
      numsLeft -= 1;
      return addNumbers(sum, numsLeft, completionCallback);
    })
  }
  else if(numsLeft === 0){
    completionCallback(sums);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} bigger than ${el2}`, (answer) => {
    if(answer === 'yes'){
      callback(true);
    }
    else{
      callback(false);
    }
  });
  }

// askIfGreaterThan(1, 2, (answer) => (console.log(`${answer}`)))

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if(isGreaterThan === true){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
      }
      else{
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
      }
    })
  }
  else if(i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([3,1,2], 0, false, (answer) => (console.log("outer bubble sort")))


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps === true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true)
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });
//

Function.prototype.myBind = function(context) {
  return () => {
    let self  = context;
    this.apply(self);
  }
}

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// }
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
