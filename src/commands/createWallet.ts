import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ethers } from "ethers";
import { User } from "../models/User";

export const data = new SlashCommandBuilder()
  .setName("newwallet")
  .setDescription("create wallet");

export async function execute(interaction: CommandInteraction) {
  const wallet = ethers.Wallet.createRandom();
  const name = interaction.user.id;

  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });
  if (q == null) {
    return interaction.reply(
      "Run the /init command before using this command."
    );
  } else {
    const address = {
      address: wallet.address,
      mnemonic: wallet.mnemonic.phrase,
      pk: wallet.privateKey,
    };

    await User.findOneAndUpdate(
      { userID: user },
      { $push: { addresses: { address } } }
    );

    return interaction.reply(
      "address: " +
        wallet.address +
        "\n mnemonic: " +
        wallet.mnemonic.phrase +
        "\n privateKey: " +
        wallet.privateKey
    );
  }
}
