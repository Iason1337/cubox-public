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
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
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
  if (msg.content === '>help') {
    msg.reply('\nThis is just a smart @$$ command that will say to visit our site!\n');
  }
});

client.on("message", (message) => {
    if (message.content.startsWith(">kick")) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Sorry I can't kick this person!");
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith(">ban")) {
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":fire: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
            message.channel.send("Sorry I can't ban this person!");
        });
    }
});


client.login(process.env.BOT_TOKEN);
