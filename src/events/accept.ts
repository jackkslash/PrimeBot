import { CommandInteraction } from "discord.js";
import { User } from "../models/User";

export async function execute(interaction: CommandInteraction) {
  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });
  if (q == null) {
    User.create({
      userID: user,
      terms: true,
      addresses: [],
    });
    return interaction.reply({
      content: "You have accepted the TOS.",
      embeds: [],
      components: [],
    });
  } else {
    return interaction.reply({
      content: "You have already accepted the TOS.",
      embeds: [],
      components: [],
    });
  }
}
