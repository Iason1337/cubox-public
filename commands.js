const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', msg => {
  if (msg.content === '>test command') {
  const embed = new Discord.RichEmbed()
  .setTitle("CUBOX CLEAR")
  .setAuthor("Created by Panayiotis", "https://cdn.discordapp.com/avatars/405783458619850782/d0d496048d2718a939e8bb82f4a8618c.png?size=128")
  .addField(">test command", "Test")
  .setColor(0xffdb4d)
  .setThumbnail("http://i.imgur.com/rtCnCW3.png")
    msg.channel.send({embed})
  }
    
});
