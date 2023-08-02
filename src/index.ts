import { Client, GatewayIntentBits } from "discord.js";
import * as commandsModules from "./commands";
import config from "./config";

console.log("Bot is starting...");

const commands = Object(commandsModules);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Alive");
});

client.on("interactionCreate", async (interaction: any) => {
  commandCheck(interaction);
  // return interaction.reply("only dms"); uncomment to force users to dm
});

client.on("message", async (interaction: any) => {
  commandCheck(interaction);
});

function commandCheck(interaction: any) {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
}

client.login(config.DISCORDBOTTOKEN);
