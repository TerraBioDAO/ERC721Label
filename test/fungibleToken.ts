/* eslint-disable no-unused-vars */
import { FungibleToken } from "../typechain-types";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("FungibleToken", () => {
  let user1: any;
  let user2: any;

  beforeEach(async () => {
    [user1, user2] = await ethers.getSigners();
  });

  it("Should deploy the contract", async () => {
    const FungibleToken = await ethers.getContractFactory("FungibleToken");
    const token: FungibleToken = await FungibleToken.deploy();
    await token.deployed();

    expect(await token.totalSupply()).to.equal(0);
  });
});
