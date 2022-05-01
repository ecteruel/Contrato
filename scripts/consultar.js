require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/Vendas.sol/Vendas.json");
const contractInterface = contract.abi;

let provider = ethers.provider;

const privateKey = `0x${process.env.PRIVATE_KEY}`;
const wallet = new ethers.Wallet(privateKey);

wallet.provider = provider;
const signer = wallet.connect(provider);

const nft = new ethers.Contract(
  '0x75a8718f98C1713655fd41D9527Cacc6552a7740',
  contractInterface,
  signer
);

let endereco='0x5c15B08EFd2eeA88AB2c545a2055BD76b511f290';

async function main(){

   let evento = (await nft.getEvento());
   console.log("Evento", evento);

   let total = (await nft.getTotalIngressos()).toNumber();
   console.log("Total de ingressos ", total);
   
   let comprador = (await nft.getComprador(endereco));
   console.log("Nome do comprador", comprador);

   let sal = (await nft.getSaldo(endereco)).toNumber()
   console.log("Saldo ", sal, " do endereço ", endereco);

//------------------------------------

endereco='0x0B474ad9c6BC0C2Af8509c5cb636A343AA57022D';

evento = (await nft.getEvento());
console.log("Evento", evento);

total = (await nft.getTotalIngressos()).toNumber();
console.log("Total de ingressos ", total);

comprador = (await nft.getComprador(endereco));
console.log("Nome do comprador", comprador);

sal = (await nft.getSaldo(endereco)).toNumber()
console.log("Saldo ", sal, " do endereço ", endereco);

}

main();


