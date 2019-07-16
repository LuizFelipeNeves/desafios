process.env.NTBA_FIX_319 = 1;
require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const { crawler } = require("./crawler");

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/NadaPraFazer (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  if (!resp) {
    return bot.sendMessage(chatId, "Use: /NadaPraFazer Cats;Brazil");
  }

  const subreddits = resp.split(";");
  const messages = await crawler(subreddits);
  return bot.sendMessage(chatId, messages);
});
