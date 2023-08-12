import { CommandInteraction } from "discord.js";
import { User } from "../models/User";
import homeRow from "../components/homeActionRow";

export async function execute(interaction: CommandInteraction) {
  const row = homeRow(true);

  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });

  if (q == null) {
    return interaction.reply(
      "Run the /init command before using this command."
    );
  } else {
    //embed with info
    //see wallets
    //create wallets
    return interaction.reply({ embeds: [], components: [row] });
  }
}
