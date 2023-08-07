import { ButtonInteraction, Client, GatewayIntentBits } from "discord.js";
import * as commandsModules from "./commands";
import * as eventModules from "./events";
import config from "./config";
import mongoose from "mongoose";

console.log("Bot is starting...");

const commands = Object(commandsModules);
const events = Object(eventModules);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Alive");
  await mongoose.connect(config.MONGODB);
});

client.on("interactionCreate", async (interaction: any) => {
  commandCheck(interaction);
  eventCheck(interaction);

  // return interaction.reply("only dms"); uncomment to force users to dm
});

client.on("message", async (interaction: any) => {
  commandCheck(interaction);
  eventCheck(interaction);
});

function commandCheck(interaction: any) {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
}

function eventCheck(interaction: any) {
  if (!interaction.isButton()) {
    return;
  }
  const eventName = interaction.customId;
  events[eventName].execute(interaction, client);
}

client.login(config.DISCORDBOTTOKEN);
