
class Block{
  constructor(time, data, previousHash = ''){
    this.time = time;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
  }
  calcHash(){
    // pls import a hash lib
    return someHash(this.time + this.previousHash + JSON.stringify(this.data)).toString();
  }
  class Blockchain{
    constructor(){
      this.chain = [this.createFirstBlock()];
    }
    createFirstBlock(){
      return new Block("01/03/2018", "first block", "0");
    }
    getLastBlock(){
      return this.chain[this.chain.length - 1];
    }
    addBlock(block){
      block.previousHash = this.getLastBlock().hash;
      block.hash = hash.calcHash();
      // Can't do this in real life: need to check for validity
      this.chain.push(block);
    }

    isChainValid(){
      for(let i = 1; i <this.chain.length; i++){
        const currBlock = this.chain[i];
        const prevBlock = this.chain[i-1];
      }
      if(currBlock.hash != currBlock.calcHash()) return false;
      if(currBlock.previousHash != prevBlock.hash) return false;
      
    }
  }
}
