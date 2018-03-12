const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('No information added');
    }
    else if (message.content === 'Cubox who created you?') {
        message.reply ('Cuboxic created me :)');
    }
    else if (message.content === 'Who is the best youtuber?') {
        message.reply ('Mcpcmstavros is the best youtuber!');
    }
    


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
