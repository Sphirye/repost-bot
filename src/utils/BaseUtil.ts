import { Client, Guild } from "discord.js"
import GuildUtils from "./GuildUtils"
import Constants from "./Constants"

export class BaseUtil {
  protected static token: string
  protected static client: Client
  protected static guild: Guild

  static async initialize(client: Client) {
    this.client = client
    this.guild = await this.getGuild()
  }

  static async getGuild() {
    const guild = await this.client.guilds.fetch(Constants.GUILD_ID!)

    if (!guild) {
      throw new Error(`Guild  ${Constants.GUILD_ID} is undefined.`)
    }

    return guild
  }
}