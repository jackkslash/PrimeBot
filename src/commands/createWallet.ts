import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ethers } from "ethers";

export const data = new SlashCommandBuilder()
  .setName("newwallet")
  .setDescription("create wallet");

export async function execute(interaction: CommandInteraction) {
  const wallet = ethers.Wallet.createRandom();
  const name = interaction.user.id;
  console.log("address:", wallet.address);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("privateKey:", wallet.privateKey);
  console.log("userid", name);

  //if user id exists store new wallet
  //if user does not exist create entry and store wallet

  return interaction.reply(
    "address: " +
      wallet.address +
      "\n mnemonic: " +
      wallet.mnemonic.phrase +
      "\n privateKey: " +
      wallet.privateKey
  );
}
