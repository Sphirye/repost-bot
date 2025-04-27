import { config } from "dotenv"
config()

export default class Constants {
  static readonly DISCORD_TOKEN = process.env.DISCORD_TOKEN
  static readonly DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
  static readonly GUILD_ID = process.env.GUILD_ID
  static readonly ORIGIN_CHANNEL_IDS = process.env.ORIGIN_CHANNEL_IDS?.split(",")
  static readonly ALLOWED_CONTENT_TYPES = process.env.ALLOWED_CONTENT_TYPES?.split(",")
  static readonly TARGET_CHANNEL_ID = process.env.TARGET_CHANNEL_ID
}