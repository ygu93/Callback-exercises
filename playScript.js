const Game = require('./towers_of_hanoi.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completionCallback(){
  reader.question("Do you want to play again", (res)=>{
    if(res=='yes'){
      this.run()
    }
    else{
      console.log("Good bye")
      reader.close()
    }
  })
}

let a = new Game();
a.run(completionCallback)
