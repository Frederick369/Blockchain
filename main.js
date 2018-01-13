// requires a hash function library
class Block{
  constructor(time, data, previousHash = ''){
    this.time = time;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
    this.nonce = nonce;
  }
  calcHash(){
    // pls import a hash lib
    return someHash(this.time + this.previousHash + this.nonce + JSON.stringify(this.data)).toString();
  }
  mineBlock(zeroes){
    while(this.hash.substring(0,zeroes) != Array(zeroes + 1).join("0")){
      this.nonce++;
      this.hash = this.calcHash();
    }
  }
}
class Blockchain{
  constructor(){
    this.chain = [this.createFirstBlock()];
    this.zeroes = 2;
  }
  createFirstBlock(){
    return new Block("01/03/2018", "first block", "0");
  }
  getLastBlock(){
    return this.chain[this.chain.length - 1];
  }
  addBlock(block){
    block.previousHash = this.getLastBlock().hash;
    block.hash.mineBlock(this.zeroes);
    // Can't do this in real life: need to check for validity
    // will try to add this in the future
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
