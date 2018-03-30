const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now online!');
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: '>information', type: 0 }});
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
  if (msg.content === '>help') {
  const embed = new Discord.RichEmbed()
  .setTitle("CUBOX HELP")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField(">clear", "Will open a menu to choose how much messages to clear\n")
  .addField(">kick <member>", "Kicks someone\n")
  .addField(">ban <member>", "Bans someone\n")
  .setColor(0xffdb4d)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
  .setFooter("Remember: You may execute commands only with low letters. CASE SENSITIVE")
    msg.channel.send({embed})
  }
    
});

client.on('message', msg => {
  if (msg.content === '>clear') {
  const embed = new Discord.RichEmbed()
  .setTitle("CUBOX CLEAR")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField(">clear 10", "Clears 10 Messages")
  .addField(">clear 20", "Clears 20 Messages")
  .addField(">clear 50", "Clears 50 Messages")
  .addField(">clear 100", "Clears 100 Messages")
  .setColor(0xffdb4d)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
    msg.channel.send({embed})
  }
    
});

client.on('message', function(message) {
    if (message.content == ">clear 10") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(10);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 10 Messages!")
                    .setColor(0xffdb4d)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == ">clear 20") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(20);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 20 Messages!")
                    .setColor(0xffdb4d)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == ">clear 50") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(50);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 50 Messages!")
                    .setColor(0xffdb4d)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('message', function(message) {
    if (message.content == ">clear 100") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(100);
                    const embed = new Discord.RichEmbed()
                    .addField("Messages deleted", "I've cleared 100 Messages!")
                    .setColor(0xffdb4d)
                    message.channel.send({embed})
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

 client.on("message", (message) => {
      if (message.content.startsWith(">kick")) {
          if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Access denied!")
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
          if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Access denied!")
          var member= message.mentions.members.first();
          member.ban().then((member) => {
              message.channel.send(":fire: " + member.displayName + " has been successfully banned :thumbsup:");
          }).catch(() => {
              message.channel.send("Sorry I can't ban this person!");
          });
          
      }
      
  }); 

client.on('message', msg => {
  if (msg.content === '>playlist') {
  const embed = new Discord.RichEmbed()
  .setTitle("Trap Nation")
  .addField("Duration", "02:26:33")
  .addField("Channel", "Uploaded by TrapNation")
  .setColor(0xffdb4d)
  .setThumbnail("https://images-ext-2.discordapp.net/external/Zdj-EIYZixh-NSFIQrmwLq6wn8RjzwEk4Hebb--Mryk/https/i.ytimg.com/vi/KOgvA98FifU/hqdefault.jpg?width=80&height=60")
    msg.channel.send({embed})
  }
    
});
   
client.login(process.env.BOT_TOKEN);
