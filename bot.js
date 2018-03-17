const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('message', message => {
  if (message.content === 'cubox can you give my avatar?') {
    message.reply(message.author.avatarURL);
  }
    
});

client.on('message', message => {
    if (message.content === 'cubox who created you?') {
    	message.reply('Cuboxic created me :)');
    }
});

client.on('message', message => {
    if (message.content === 'give me your creators site') {
    	message.reply('Sure! Visit http://www.instantpvp.com/cuboxic');
    }
});

client.on("message", msg => {
    if (msg.content.toLowerCase().startsWith('clearchat') {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 5});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
