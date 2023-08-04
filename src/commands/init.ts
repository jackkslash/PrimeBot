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

  const message = await interaction.reply({
    embeds: [embed],
    components: [row],
  });

  const filter = (interaction: any) =>
    interaction.customId === "accept" || interaction.customId === "decline";

  message
    .awaitMessageComponent({ filter, time: 15000 })
    .then(async (interaction) => {
      if (interaction.customId === "accept") {
        const user = interaction.user.id;
        const q = await User.findOne({ userID: user });
        if (q == null) {
          User.create({
            userID: user,
            terms: true,
            addresses: [],
          });
          interaction.update({
            content: "You have accepted the TOS.",
            embeds: [],
            components: [],
          });
        } else {
          interaction.update({
            content: "You have already accepted the TOS.",
            embeds: [],
            components: [],
          });
        }
      } else if (interaction.customId === "decline") {
        interaction.update({
          content: "You have already accepted the TOS.",
          embeds: [],
          components: [],
        });
      }
    })
    .catch(console.error);
}
