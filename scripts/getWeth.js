const { getNamedAccounts } = require("hardhat");

async function getWeth() {
    const { deployer } = await getNamedAccounts();
}

module.exports = { getWeth }