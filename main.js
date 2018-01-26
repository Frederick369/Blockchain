const SHA256 =  require('crypto-js/sha256')
class Block{
  constructor(index, timestamp, data, previousHash = '', hash){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calcHash();
    this.nonce = 0;
  }
  calcHash(){
    return SHA256(this.index + this.timestamp + this.previousHash + this.nonce + JSON.stringify(this.data)).toString();
  }
  mineBlock(zeroes){
    while(this.hash.substring(0,zeroes) != Array(zeroes + 1).join("0")){
      this.nonce++;
      this.hash = this.calcHash();
    }
    console.log("Block Mined: " + this.hash)
  }
}
class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
    this.zeroes = 3;
  }
  createGenesisBlock(){
    return new Block(0,"01/03/2018", "genesis block", "1st one");
  }
  getLastBlock(){
    return this.chain[this.chain.length - 1];
  }
  addBlock(block){
    block.previousHash = this.getLastBlock().hash;
    block.mineBlock(this.zeroes);
    // Can't do this in real life: need to check for validity
    // will try to add this in the future
    this.chain.push(block);
  }

  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currBlock = this.chain[i];
      const prevBlock = this.chain[i-1];
    if(prevBlock.index + 1 != currBlock.index) return false;
    if(currBlock.hash != currBlock.calcHash()) return false;
    if(currBlock.previousHash != prevBlock.hash) return false;
    }
    return true;
  }
}

let test = new Blockchain();
test.addBlock(new Block(1,"01/02/2018","first test","data?"));
test.addBlock(new Block(2,"01/03/2018","block2",{ amount: 2 }));
console.log(JSON.stringify(test, null, 4));
