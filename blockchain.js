
// Node.js is installed

const Sha256= require("crysto-js/sha256");
// create the block class
class Minerblock{
// define and initialise the block
Constructor(index,timestamp,data,previousblockhash="")
{this.index=index:
this.timestamp=timedtamp;
this.data=data;
this.previousblockhash=previousblockhash;
this.hash=this.calculateHash();
this.nonce=o;
}
calculateHash(){
return sha256(this.index+this.timestamp+JSON.stringify(this.data)+this.previousblockhas+this.nonce).toString();
}
proofOfWork(difficulty){
while(this.hash.substring()!=Array(difficulty+1).join("0")) 
{this.nonce++;
this.hash=this.calculateHash();}
}
}

class Minerblockchain{
// initialise the blockchain
Constructor(){
this.blockchain=[startGenesisBlock()];
this.difficulty=4;
}
startGenesisBlock(){
return new Minerblock(0,01/01/2021,"This is the initial block in the chain ");
}
latestBlock(){
return this.blockchain[this.blockchain.length-1];
}
addNewBlock(newBlock){
newBlock.previousblockhash=this.latestBlock().hash;
newBlock.hash=newBlock.calculateHash();
newBlock.proofOfWork(this.difficulty);
this.blockchain.push(newblock);
}
validityOfBlock(){
Let currentBlock=this.blockchain[i];
let previousBlock=this.blockchain[i-1];
for(let i=1; i<this.blockchain.length:i++){
if(currentBlock.hash!=this.calculateHash()){
return false;}
if(currentBlock.previousblockhash!=previousBlock.hash){
return false;}
return true;
}
}

}

// Adding blocks to the blockchain
// create a block chain
console.log(" creating and adding blocks to the blockchain);
let myBlockChain = new Minerblockchain();
MyBlockchain.addNewBlock(new Minerblock(1,01/05/2021,{sender:"Idoge",receiver:"Iyosi", quantity:50})
);
MyBlockchain.addNewBlock(new Minerblock(2,01/06/2021,{sender:"Oluke" receiver:"Doris" quantity:70})):
