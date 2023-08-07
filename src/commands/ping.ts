import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("ping");

export async function execute(interaction: CommandInteraction) {
  const accept = new ButtonBuilder()
    .setCustomId("ping")
    .setLabel("ping")
    .setStyle(ButtonStyle.Success);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(accept);

  return interaction.reply({
    components: [row],
  });
}
