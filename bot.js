const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: 'play.olympusnetwork.eu', type: 0 }});
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

client.on("message", (message) => {
     if (message.content.startsWith("/kick")) {
         if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Access denied!")
         var member= message.mentions.members.first();
         member.kick().then((member) => {
             message.channel.send(":thumbsup: " + member.displayName + " has been successfully kicked");
         }).catch(() => {
             message.channel.send("Sorry I can't kick this person!");
         });

     }

 });

client.on("message", (message) => {
     if (message.content.startsWith("/ban")) {
         if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Access denied!")
         var member= message.mentions.members.first();
         member.ban().then((member) => {
             message.channel.send(":thumbsup: " + member.displayName + " has been successfully banned");
         }).catch(() => {
             message.channel.send("Sorry I can't ban this person!");
         });

     }

 });


 client.on('message', msg => {
   if (msg.content.includes('/help')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Available commands")
   .addField("/store", "CURRENTLY UNAVAILABLE")
   .addField("/discord", "Generates you a link to invite your friends")
   .addField("/event", "Find information about upcoming events")
   .addField("/address", "Gives you the server address.")
   .addField("/games", "Gives you a list with all the available gamemodes")
   .addField("/rules"), "Gives you a link to read the server rules")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });


 client.on('message', msg => {
   if (msg.content.includes('/store')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Store")
   .addField("Support the servers by buying ranks here", "http://olympusnetwork.eu/store")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

 client.on('message', msg => {
   if (msg.content.includes('/discord')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Discord")
   .addField("Invite your friends to our discord by giving them this link", "http://olympusnetwork.eu/discord")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

 client.on('message', msg => {
   if (msg.content.includes('/event')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Events")
   .addField("There's currently one event", "http://olympusnetwork.eu/discord/event")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

 client.on('message', msg => {
   if (msg.content.includes('/address')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server IP")
   .addField("Play games in this address", "play.olympusnetwork.eu")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

 client.on('message', msg => {
   if (msg.content.includes('/games')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Gamemodes")
   .addField("You can currently play Factions and Ultra Hardcore")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

 client.on('message', msg => {
   if (msg.content.includes('/rules')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Rules")
   .addField("You can read the server rules here", "LINK FOR DA RULES")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });

   
client.login(process.env.BOT_TOKEN);
