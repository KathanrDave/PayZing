const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
    "Deploying contracts with the account:",
    deployer.address
    );

    const PayZip = await ethers.getContractFactory("PayZip");
    const contract = await PayZip.deploy();

    console.log("Contract deployed at:", contract.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
