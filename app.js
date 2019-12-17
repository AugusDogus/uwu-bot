const Discord = require("discord.js");
const client  = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
    console.log("uwu");
    client.user.setPresence({ game: { name: 'uwu' }, status: 'online' })
});

client.on("message", (message) => {

    if(!message.author.bot) {
        if(message.content.toLowerCase().includes('uwu')) {
            message.channel.send('uwu');
        }
    }

});

client.login(config.token);