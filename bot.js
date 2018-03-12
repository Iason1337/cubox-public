const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('Rules');
    else if {message.content === '!help') {
        message.reply ('Rules')

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
