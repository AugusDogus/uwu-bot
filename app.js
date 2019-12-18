const Discord = require("discord.js");
const client  = new Discord.Client();
const discowizID = "450830933734719508"

client.on("ready", () => {
    console.log("uwu");
    client.user.setPresence({ game: { name: 'uwu' }, status: 'online' })
});

client.on("message", (message) => {

    if(!message.author.bot) {
        if(message.content.startsWith('!uwu')) {
            translate(message);
        } else if(message.content.toLowerCase().includes('uwu')) {
            message.channel.send('uwu');
        }
    }
   	else if(!message.sender === discowizID) {
		message.channel.send('UwU I love you Senpi!');
	}
   
});

const translate = ((message) => {
    fetchMessage(message).then(data => {
        let spawn = require("child_process").spawn;
        let process = spawn('python',["./translate.py", data.content]);
        process.stdout.on('data', (data) => { 
            message.channel.send(data.toString());
        }); 
    
    });
});

const fetchMessage = (message) => {
    return new Promise(resolve => {
        message.channel.fetchMessages({ limit: 10 })
        .then(messages => {
            // Cast messages to an array
            messages = Array.from(messages.values());
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].id === message.id) {
                    resolve(messages[i+1]);
                }
            }
        })
        .catch(console.error);
    });
}

client.login(process.env.token);
