const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('View #information for help!');
    }
    if (message.content === 'stavro') {
    	message.reply('You may not talk to this guy!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
