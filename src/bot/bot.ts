import TelegramBot from 'node-telegram-bot-api';
const BOT_TOKEN = process.env.BOT_TOKEN ?? "";
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from?.id ?? 0;
    const message = msg.text ?? "";

});