const { Telegraf } = require("telegraf");
const fetch = require("node-fetch");
const fs = require('fs');

const bot = new Telegraf("1232053693:AAFIihc4WEq7MAjvzptvK_CgDnUM9bxWzVY");

bot.start((ctx) => ctx.reply("Welcome"));

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => ctx.reply("ffff"));
//bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения

bot.hears("hi", async (ctx) => {
  await fetch(
    "https://music.apple.com/ua/playlist/top-100-ukraine/pl.815f78effb3844909a8259d759ecbddb"
  )
    .then((resp) => resp.text())
    .then((body) => fs.writeFileSync('data',body));
});

// bot.hears это обработчик конкретного текста, данном случае это - "hi"

bot.launch();
console.log("works");
