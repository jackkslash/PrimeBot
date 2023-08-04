import { ButtonInteraction, Client, GatewayIntentBits } from "discord.js";
import * as commandsModules from "./commands";
import config from "./config";
import mongoose from "mongoose";

console.log("Bot is starting...");

const commands = Object(commandsModules);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Alive");
  await mongoose.connect(config.MONGODB);
});

client.on("interactionCreate", async (interaction: any) => {
  if (interaction.isCommand()) {
    const { commandName } = interaction;
    console.log(commandName);
    commands[commandName].execute(interaction, client);
  } else if (interaction.isButton()) {
    const btn_id = interaction.customId;
    console.log(btn_id);
  } else {
    return;
  }

  // return interaction.reply("only dms"); uncomment to force users to dm
});

client.on("message", async (interaction: any) => {
  commandCheck(interaction);
});

function commandCheck(interaction: any) {
  if (!interaction.isCommand() || !interaction.isButton()) {
    return;
  }
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
}

client.login(config.DISCORDBOTTOKEN);
