const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('No information added');
    }
    else if (message.content === 'Cubox who created you?') {
        message.reply ('Cuboxic created me :)');
    }
    else if (message.content === 'Tell me a joke') {
        message.reply ('One day at the end of class, little Johnny's teacher asks the class to go home and think of a story to be concluded with the moral of that story. The following day the teacher asks for the first volunteer to tell their story.
Little Suzy raises her hand. "My dad owns a farm and every Sunday we load the chicken eggs on the truck and drive into town to sell them at the market. Well, one Sunday we hit a big bump and all the eggs flew out of the basket and onto the road."
When the teacher asked for the moral of the story, Suzy replied, "Don't keep all your eggs in one basket."
Little Lucy went next. "My dad owns a farm too. Every weekend we take the chicken eggs and put them in the incubator. Last weekend only eight of the 12 eggs hatched."
Again, the teacher asked for the moral of the story.
Lucy replied, "Don't count your chickens before they hatch."
Next up was little Johnny. "My uncle Ted fought in the Vietnam war, and his plane was shot down over enemy territory. He jumped out before it crashed but could only take a case of beer, a machine gun and a machete. On the way down, he drank the case of beer. Then he landed right in the middle of 100 Vietnamese soldiers. He shot 70 with his machine gun, but then he ran out of bullets! So he pulled out his machete and killed 20 more. Then the blade on his machete broke, so he killed the last ten with his bare hands."
The teacher looked a little shocked. After clearing her throat, she asked what possible moral there could be to this story.
"Well," Johnny replied, "Don't f**k with Uncle Ted when he's been drinking."');
    }


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
