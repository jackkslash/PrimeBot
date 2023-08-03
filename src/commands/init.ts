import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import { User } from "../models/User";

export const data = new SlashCommandBuilder()
  .setName("init")
  .setDescription("init");

export async function execute(interaction: CommandInteraction) {
  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });

  const accept = new ButtonBuilder()
    .setCustomId("accept")
    .setLabel("Accept")
    .setStyle(ButtonStyle.Success);
  const decline = new ButtonBuilder()
    .setCustomId("decline")
    .setLabel("Decline")
    .setStyle(ButtonStyle.Danger);
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    accept,
    decline
  );

  const embed = new EmbedBuilder().setTitle("TOS").setDescription("TOS Blah");

  return await interaction.reply({
    embeds: [embed],
    components: [row],
  });
}
