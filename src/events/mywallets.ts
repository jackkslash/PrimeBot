import { CommandInteraction, EmbedBuilder } from "discord.js";
import { User } from "../models/User";
import homeRow from "../components/homeActionRow";

export async function execute(interaction: CommandInteraction) {
  const user = interaction.user.id;
  const q = await User.findOne({ userID: user });
  if (q == null) {
    return interaction.reply(
      "Run the /init command before using this command."
    );
  } else {
    const test = homeRow(false);
    console.log(q);
    const embed = new EmbedBuilder().setTitle("My wallets");

    q.addresses.map((data: any, index) => {
      let i = index + 1;
      embed.addFields({
        name: "Wallet " + i,
        value: data.address.address,
      });
    });

    return interaction.reply({
      embeds: [embed],
      content: "address: ",
      components: [test],
    });
  }
}
