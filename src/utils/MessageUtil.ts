import { EmbedBuilder, Message, MessagePayload, SnowflakeUtil, TextChannel } from "discord.js";
import Constants from "./Constants";
import GuildUtils from "./GuildUtils";
import { DateTime } from "luxon";

export default class MessageUtil {
  static getRandomMessage(messages: Message[]): Message {  
    if (messages.length === 0) {
      throw new Error("The media messages array is empty.");
    }
  
    const randomIndex = Math.floor(Math.random() * messages.length);
  
    return messages[randomIndex]
  }

  static filterMediaMessages(messages: Message[]): Message[] {
    return messages.filter(msg => 
      msg.attachments.some(attachment =>
        Constants.ALLOWED_CONTENT_TYPES!.includes(attachment.contentType!)
      )
    )
  }

  static async getMessages(channel: TextChannel, before: string | undefined = undefined): Promise<Message[]> {
    const messages = await channel.messages.fetch({ limit: 100, before })
    return Array.from(messages.values())
  }

  static async sendMessage(message: Message) {
    const targetChannel = await GuildUtils.getChannel(Constants.TARGET_CHANNEL_ID!)
    const attachments = Array.from(message.attachments.values())
    const date = `${DateTime.fromJSDate(message.createdAt).toFormat('dd/LLL/yyyy')}`
    
    const embedMessage = new EmbedBuilder()
      .setAuthor({
        name: message.author.username,
        iconURL: message.author.avatarURL()!,
      })
      .setTitle("Todays daily repost is...")
      .setDescription(`[${date}](${message.url})`)
      .setImage(attachments[0].url);


    targetChannel.send({ embeds: [embedMessage] })
  }
}