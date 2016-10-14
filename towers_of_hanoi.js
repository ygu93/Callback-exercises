const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game{
  constructor(){
    this.stacks = [[4,3,2,1], [], []]
  }

  promptMove(callback){
    this.print();
    reader.question("Pick a start pile", (start) =>{
      reader.question("Pick an end pile", (end) =>{
        let start_pile = parseInt(start, 10);
        let end_pile = parseInt(end, 10);
        let move = callback(start_pile, end_pile);
         if(move===false){
           console.log("Not a valid move")
           this.promptMove(this.move.bind(this));
          }
        else{
          if(this.isWon){
            this.completionCallback();
          }
          else{
          this.promptMove(this.move.bind(this));
          }
        }
      })
    })
  }

  isValidMove(startTowerIdx, endTowerIdx){
    if(startTowerIdx > 2 || startTowerIdx < 0 || endTowerIdx > 2 || endTowerIdx < 0){
      return false;
    }
    else if(startTowerIdx.length === 0){
      return false;
    }
    else if(endTowerIdx.length === 0){
      return true;
    }
    else if(this.stacks[startTowerIdx][this.stacks[startTowerIdx].length - 1] > this.stacks[endTowerIdx][this.stacks[endTowerIdx].length - 1]){
      return false;
    }
    else{
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx){
    if(this.isValidMove(startTowerIdx, endTowerIdx)){
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }
    else{
      return false;
    }
  }

  print(){
    console.log(JSON.stringify(this.stacks));
  }

  isWon(){
    if(this.stacks[0].length === 0 && (this.stacks[1].length === 4 || this.stacks[2].length === 4)){
      return true;
    }
    else{
      return false;
    }
  }

  run(completionCallback){
    this.completionCallback = completionCallback
    this.promptMove(this.move.bind(this));
  }
}
module.exports = Game;

// let a = new Game();
// a.run(()=>(console.log("Congrats you won")))
// console.log(a.isValidMove(0,1))
// console.log(a.isValidMove(-1,2))
// console.log(a.isValidMove(0,4))
// console.log(a.isValidMove(0,2))
// console.log(a.isValidMove(0,0))
// console.log(a.move(0,2))
// console.log(a.move(0,4))
// a.print()
// console.log(a.isWon())
