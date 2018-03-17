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
    if (message.content === 'give me your creators site') {
    	message.reply('Sure! Visit http://www.instantpvp.com/cuboxic');
    }
});

client.on('message', message => {
  if (message.content == "cubox clear the chat") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(100);
              message.reply("I deleted 100 Messages!");
          }
      } catch(e) {
          message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
          console.log(e);
      }
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
