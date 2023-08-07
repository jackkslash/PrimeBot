import { CommandInteraction } from "discord.js";

export async function execute(interaction: CommandInteraction) {
  return interaction.reply({
    content: "You have already accepted the TOS.",
    embeds: [],
    components: [],
  });
}
