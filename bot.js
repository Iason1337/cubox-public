const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now online!');
});


client.on('message', message => {
    if(message.author.bot) return;
    else if (message.member.hasPermission("MANAGE_MESSAGES")) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&  =]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&  =]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages');
        });
    }
});

client.login(process.env.BOT_TOKEN);
