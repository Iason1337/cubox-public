const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now working correctly!');
    client.user.setPresence({ game: { name: '!info for information!', type: 0 }
});

client.on('message', message => {
    if (message.content === 'cubox who created you?') {
    	message.reply('Cuboxic created me :)');
    }
    else if (message.content === 'Cubox who created you?') {
        message.reply ('Cuboxic created me :)');
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
