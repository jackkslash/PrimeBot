import { CommandInteraction } from "discord.js";

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("events work");
}
