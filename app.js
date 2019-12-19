// Dependencies
const Discord = require('discord.js');
const client  = new Discord.Client();
const translate = require('./translate');

// When the client connects to the discord api
client.on('ready', () => {
    // Log to let the user know the bot is running
    console.log('uwu');
    // and set our prescence to online
    client.user.setPresence({ game: { name: 'uwu' }, status: 'online' });
});

// When we recieve a new message
client.on('message', (message) => {
    // Check to see if the author is the bot
    if(!message.author.bot) {
        // If the author isn't the bot,
        // check to see if the first word is our prefix + command 
        if(message.content.replace(/ .*/,'') === '!uwu') {
            // If the message starts with !uwu
            // Go get the previous message before !uwu
            fetchMessage(message)
            // Then translate it..
                .then(message => translate(message)
                //..and send it to the discord channel
                    .then(translation => message.channel.send(translation))
                    .catch(e => console.error(e)));
        // Check to see if the user's message has 'uwu' in it.    
        } else if(message.content.toLowerCase().includes('uwu')) {
            // If it does, echo them with an uwu
            message.channel.send('uwu');
        }
    }
});

// Fetch the 10 previous messages in the discord channel
const fetchMessage = (message) => {
    return new Promise(resolve => {
        message.channel.fetchMessages({ limit: 10 })
            .then(messages => {
            // Cast messages to an array
                messages = Array.from(messages.values());
                // Find the message sent before the !uwu command was sent
                for (let i = 0; i < messages.length; i++) {
                    if (messages[parseInt(i)] === message) {
                        resolve(messages[i+1]);
                    }
                }
            })
            .catch(console.error);
    });
};

// Login to discord api
client.login(process.env.token);