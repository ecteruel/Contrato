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

//Comprador 1 - Evandro Teruel
let endereco='0x5c15B08EFd2eeA88AB2c545a2055BD76b511f290';

async function main(){

    let evento = (await nft.getEvento());
    console.log("Evento", evento);
 
    let total = (await nft.getTotalIngressos()).toNumber();
    console.log("Total de ingressos ", total);

    await nft.vender(endereco ,"Evandro Teruel", 1)
    .then(
        function(log) {
          console.log(`Sucesso: ${log.hash}`);
        }
    ).catch(
        function(e)  {
            console.log("Erro: ", e);
            process.exit(1);
        }    
    );


//------------------------------------

//Comprador 2 - Mariana Pinho
endereco='0x0B474ad9c6BC0C2Af8509c5cb636A343AA57022D';

    await nft.vender(endereco ,"Mariana Pinho", 1)
    .then(
        function(log) {
          console.log(`Sucesso: ${log.hash}`);
        }
    ).catch(
        function(e)  {
            console.log("Erro: ", e);
            process.exit(1);
        }    
    );


}

main();


