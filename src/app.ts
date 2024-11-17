import express, { json } from 'express';
import cors from 'cors';
import { mainRouter } from "./routes/routes";
import "express-async-errors";
import TelegramBot from 'node-telegram-bot-api';
import { API } from "./API.provider";
import { ChatResponse } from "./API.types";
import { v4 as uuidv4 } from 'uuid';
const BOT_TOKEN = process.env?.BOT_TOKEN ?? "";
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(json());
app.use(cors());
app.use(mainRouter);
bot.on('message', async (msg) => {
    try {
        const response = await API.post<ChatResponse>("/chat", {
            chatId: msg.chat.id,
            userId: uuidv4() ?? 0,
            message: msg.text ?? "",
        });
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, response.data.message.content);
    } catch (error) {
        console.error(error);
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});