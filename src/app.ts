import express, { json } from 'express';
import cors from 'cors';
import { mainRouter } from "./routes/routes";
import "express-async-errors";
import TelegramBot from 'node-telegram-bot-api';
import { API } from "./API.provider";
import { ChatResponse } from "./API.types";
const BOT_TOKEN = process.env?.BOT_TOKEN ?? "";
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(json());
app.use(cors());
app.use(mainRouter);
bot.on('message', async (msg) => {
    const response = await API.post<ChatResponse>("/chat", {
        chatId: msg.chat.id,
        userId: msg.from?.id ?? 0,
        message: msg.text ?? "",
    });
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, response.data.message.content);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});