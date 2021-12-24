//bot
const Discord  = require('discord.js');
const token = 'OTEzNDA5MzA0MDUxMjIwNTEw.YZ-EtA.CzumVwlkQsvTRorfYaY-1evrOXQ';
const bot = new Discord.Client();
const cron = require('cron')
const disbut = require ('discord-buttons') (bot)
//prefix
const prefix = '/';
//bot online event
bot.on('ready', () => {

    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("accraft.ir | accraft bot")
})



//message
/*bot.on('ready', () => {
    
    bot.channels.cache.get("918018569067986995").send(
    
    "سلام\n\nسرور دیسکورد آپدیت داده 🥳🥳\n\nیک سری از فونت ها تغییر کرده\n\nپرمیشن رول های بالا هم بهتر شده\n\n@everyone"

    )
    })
*/

//bot login verify
bot.login(token)