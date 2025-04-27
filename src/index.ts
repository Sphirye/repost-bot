import { ChannelManager, Client, Guild, GuildBasedChannel, Message, SnowflakeUtil, TextChannel } from "discord.js";
import Constants from "./utils/Constants";
import MessageUtil from "./utils/MessageUtil";
import { BaseUtil } from "./utils/BaseUtil";
import GuildUtils from "./utils/GuildUtils";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
});

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
  await BaseUtil.initialize(client)

  await sendRandomMessage()
});

client.login(Constants.DISCORD_TOKEN);

async function sendRandomMessage() {
  let messages: Message<boolean>[] = []

  for (const id of Constants.ORIGIN_CHANNEL_IDS!) {
    const channel = await GuildUtils.getChannel(id)
    const channelMessages = await MessageUtil.getMessages(channel)
    messages.push(...MessageUtil.filterMediaMessages(channelMessages))
  }

  const randomMessage = MessageUtil.getRandomMessage(messages)
  MessageUtil.sendMessage(randomMessage)

}


