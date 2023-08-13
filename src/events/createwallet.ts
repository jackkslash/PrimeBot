import { CommandInteraction } from "discord.js";
import { ethers } from "ethers";
import { User } from "../models/User";
import homeRow from "../components/homeActionRow";

export async function execute(interaction: CommandInteraction) {
  const row = homeRow(false);
  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });
  if (q == null) {
    return interaction.reply(
      "Run the /init command before using this command."
    );
  } else {
    if (q.addresses.length >= 3) {
      return interaction.reply({
        content: "You have exceded the limit on wallets.",
        components: [row],
      });
    } else {
      const wallet = ethers.Wallet.createRandom();
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
        components: [row],
      });
    }
  }
}
