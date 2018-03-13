const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am now working correctly!');
});

client.on('message', message => {
  if (message.content === 'cubox what is my avatar') {
    message.reply(message.author.avatarURL);
  }
    
});

client.on('message', message => {
    if (message.content === 'cubox who created you?') {
    	message.reply('Cuboxic created me :)');
    }
    else if (msg.startsWith('PURGE')) { 
            message.delete();


            if (!message.member.roles.find("name", "bot-commander")) {
                message.channel.send('You need the \`bot-commander\` role to use this command.'); 
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send('Please use a number as your arguments. \n Usage: purge <amount>'); //\n means new line.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        purge();

    }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
