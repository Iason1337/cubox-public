const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'sub to mcpcmstavros') {
    	message.reply('Did someone say Mcpcmstavros? You can subscribe to him here https://www.youtube.com/c/mcpcmstavros');
    }
    else if (message.content === 'Cubox who created you?') {
        message.reply ('Cuboxic created me :)');
    }
    else if (message.content === 'Who is the best youtuber?') {
        message.reply ('Mcpcmstavros is the best youtuber!');
    }
    else if (message.content === 'who is the best youtuber?') {
        message.reply ('Mcpcmstavros is the best youtuber!');
    }
    else if (message.content === '!mcpcmstavros rp') {
        message.reply ('Stavros is using TimeDeo 2k Pack');
    }
    


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
