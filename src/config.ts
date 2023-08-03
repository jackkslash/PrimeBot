import dotenv from "dotenv";
dotenv.config();
const { CLIENTID, GUILDID, DISCORDBOTTOKEN, MONGODB } = process.env;

if (!CLIENTID || !GUILDID || !DISCORDBOTTOKEN || !MONGODB) {
  throw new Error("Missing .env vars");
}

const config: Record<string, string> = {
  CLIENTID,
  GUILDID,
  DISCORDBOTTOKEN,
  MONGODB,
};

export default config;
