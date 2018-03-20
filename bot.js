const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = ">";

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: 'JS', type: 0 }});
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
                    message.channel.bulkDelete(20);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on("message", function(message) {

    console.log(message.content);

    if ( message.author.equals(bot.user)) 
        return;
    if( !message.content.startsWith(PREFIX))
        return;

    var argv = message.content.substr(PREFIX.length).split(" ");
    console.log("argv: "+argv+", argv[1]: "+argv[1]+"");
    switch(argv[0].toLowerCase()) {
        case "ping":
            message.channel.send("Ping!");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .setTitle(`Title`)
                .setDescription(`Desc`)
                .addField("Title", "Description")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.send("Invalid commands");
    }

});

client.login(process.env.BOT_TOKEN);
