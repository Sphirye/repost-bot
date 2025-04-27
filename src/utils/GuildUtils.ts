import { Client, TextChannel } from "discord.js"
import { BaseUtil } from "./BaseUtil"
import Constants from "./Constants"

export default class GuildUtils extends BaseUtil {

  static async getChannel(channelId: string) {
    const channel = await this.guild.channels.fetch(channelId)

    if (!channel) {
      throw new Error(`Channel ${channelId} is undefined.`)
    }

    return channel as TextChannel
  }
}