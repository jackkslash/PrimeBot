import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default function homeRow(state: Boolean) {
  if (state == true) {
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
    return row;
  } else {
    const home = new ButtonBuilder()
      .setCustomId("home")
      .setLabel("Home")
      .setStyle(ButtonStyle.Success);

    const create = new ButtonBuilder()
      .setCustomId("createWallet")
      .setLabel("Create Wallet")
      .setStyle(ButtonStyle.Success);

    const mywallets = new ButtonBuilder()
      .setCustomId("mywallets")
      .setLabel("My Wallets")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      home,
      create,
      mywallets
    );
    return row;
  }
}
