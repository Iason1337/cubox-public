const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: '>help', type: 0 }});
});

client.on('message', message => {
    if(message.author.bot) return;
    else if (message.member.hasPermission("MANAGE_MESSAGES")) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&  =]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&  =]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages');
        });
    }
});

client.on('message', function(message) {
    if (message.content == ">clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(100);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', msg => {
  if (msg.content === 'hi cubox') {
    msg.reply('Hi there!');
  
  }
    
});

client.on('message', msg => {
  if (msg.content === 'cubox how is your day?') {
    msg.reply('Very busy! I am learning stuff everyday');
  
  }
    
});

  client.on("message", (message) => {
      if (message.content.startsWith(">kick")) {
          var member= message.mentions.members.first();
          member.kick().then((member) => {
              message.channel.send(":wave: " + member.displayName + " has been successfully kicked :thumbsup: ");
          }).catch(() => {
              message.channel.send("Sorry I can't kick this person!");
          });
          
      }
      
  });

  client.on("message", (message) => {
      if (message.content.startsWith(">ban")) {
          var member= message.mentions.members.first();
          member.ban().then((member) => {
              message.channel.send(":fire: " + member.displayName + " has been successfully banned :thumbsup: ");
          }).catch(() => {
              message.channel.send("Sorry I can't ban this person!");
          });
      }
      
  });   

client.on('message', msg => {
  if (msg.content.includes('>information')) {
  const embed = new Discord.RichEmbed()
  .setTitle("CUBOX Creation")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField("Who created this bot?", "This bot was created by Panayiotis, a Greek Developer.")
  .addField("What commands can I use?", "You can use >help to get started!")
  .setColor(0xff0000)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
    msg.channel.send({embed})
  }
    
});

client.on('message', msg => {
  if (msg.content.includes('>help')) {
  const embed = new Discord.RichEmbed()
  .setTitle("CUBOX HELP")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField(">clear", "Clears 100 Messages")
  .addField(">kick <member>", "Kicks someone")
  .addField(">ban <member>", "Bans someone")
  .setColor(0xffdb4d)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
  .setFooter("Do you have more questions? Contact the Developer")
    msg.channel.send({embed})
  }
    
});

client.on('message', function(message) {
    if (message.content == ">test clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(100);
                    const embed = new Discord.RichEmbed()
                    .addField(">Messaged deleted", "I've cleared 100 Messages!")
                    .setColor(0xffdb4d)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});
   
client.login(process.env.BOT_TOKEN);
