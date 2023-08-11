import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import { User } from "../models/User";

export const data = new SlashCommandBuilder()
  .setName("home")
  .setDescription("home");

export async function execute(interaction: CommandInteraction) {
  const create = new ButtonBuilder()
    .setCustomId("createWallet")
    .setLabel("Create Wallet")
    .setStyle(ButtonStyle.Success);

  const mywallets = new ButtonBuilder()
    .setCustomId("mywallets")
    .setLabel("My Wallets")
    .setStyle(ButtonStyle.Success);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    create,
    mywallets
  );

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
