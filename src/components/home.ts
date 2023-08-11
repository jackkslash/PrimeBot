import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default function homeRow(state: Boolean) {
  if (state == true) {
    const test = new ButtonBuilder()
      .setCustomId("test")
      .setLabel("Test")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(test);
    return row;
  } else {
    const home = new ButtonBuilder()
      .setCustomId("home")
      .setLabel("Home")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(home);
    return row;
  }
}
