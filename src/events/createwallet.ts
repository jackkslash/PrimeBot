import { ButtonBuilder, ButtonStyle, CommandInteraction } from "discord.js";
import { ethers } from "ethers";
import { User } from "../models/User";

export async function execute(interaction: CommandInteraction) {
  const wallet = ethers.Wallet.createRandom();

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

    return interaction.reply({
      content:
        "address: " +
        wallet.address +
        "\n mnemonic: " +
        wallet.mnemonic.phrase +
        "\n privateKey: " +
        wallet.privateKey,
    });
  }
}
