const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('message', message => {
  if (message.content === 'cubox what is my avatar') {
    message.reply(message.author.avatarURL '\nHere''s your avatar!');
  }
    
});

client.on('message', message => {
    if (message.content === 'cubox who created you?') {
    	message.reply('Cuboxic created me :)');
    }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
