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

client.on('message', message => {
  if (message.content === 'test delete') {
      message.channel.bulkDelete(100);
  }

});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
