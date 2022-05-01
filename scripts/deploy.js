
const { ethers } = require("hardhat");

async function main() {
  const vendas = await ethers.getContractFactory("Vendas");
  const vnd = await vendas.deploy();
  await vnd.deployed();
  console.log("Contrato ", vnd.address, " foi implantado com sucesso");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });