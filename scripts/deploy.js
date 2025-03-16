const hre = require("hardhat");

async function main() {
    const NAME ="GPTMembership";
    const SYMBOL ="GPT";

    const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
    const gptMembership = await GPTMembership.deploy(NAME,SYMBOL);

    await gptMembership.deployed();

    console.log("GPTMembership", gptMembership.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});
//0xA03E544455a91bb59F01b1Ad8Ba916ECCB4F9004