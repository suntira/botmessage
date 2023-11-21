const TelegramBot = require('node-telegram-bot-api');
const token = 'paste token and install node-telegram-bot-api';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messagetext = msg.text;
    console.log(msg.text);
  bot.sendMessage( chatId, messagetext);
});