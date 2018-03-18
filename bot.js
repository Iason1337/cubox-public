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
    if (message.content === 'cubox who created you?') {
    	message.reply('Cuboxic created me :)');
    }
});

client.on('message', message => {
    if (message.content === 'cubox give me your creators site') {
    	message.reply('Sure! Visit http://www.instantpvp.com/cuboxic');
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
    if(message.author.bot) return;
    var re =  malaka (message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Please do not swear!');
        });
    }
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.author.send('Hello, Ask me the following things\n1. cubox clear the chat\n2. cubox give me your creators site\n3. cubox who created you?\n4. cubox can you give my avatar?');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
