"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const BOT_TOKEN = (_a = process.env.BOT_TOKEN) !== null && _a !== void 0 ? _a : "";
const bot = new node_telegram_bot_api_1.default(BOT_TOKEN, { polling: true });
bot.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const chatId = msg.chat.id;
    const userId = (_b = (_a = msg.from) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0;
    const message = (_c = msg.text) !== null && _c !== void 0 ? _c : "";
}));
