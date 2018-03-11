const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('View #information for help!');
  	}
});

client.on('message', message => {
    if (message.content === '@A KID MADE IT.') {
    	message.reply('Please do not tag this guy!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
