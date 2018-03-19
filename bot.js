const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: '!commands', type: 0 }});
});

client.on('message', message => {
  if (message.content === 'cubox can you give my avatar?') {
    message.reply(message.author.avatarURL);
  }
    
});

client.on('message', message => {
    if(message.author.bot) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages');
        });
    }
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.author.send('Hi!\nYou can ask cubox the following thing:\n\ncubox can you give my avatar?');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
