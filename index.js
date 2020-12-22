const { Client, MessageAttachment, Message } = require('discord.js');
const config = require('./config.json');

const client = new Client();

const prefix = "!";

client.on("message", (message) => {
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'zoek'){
        message.channel.send('Gran streamer, entra a verlo en https://www.twitch.tv/zoek_tv :sunglasses:');
    }
    if(command === 'javo'){
        const attachment = new MessageAttachment('https://media.discordapp.net/attachments/434531579323482113/736061037954203648/unknown.png');
        message.channel.send(attachment);
    }
    if(command === 'chid'){
        const channel = client.channels.cache.get("472672843520278528");
        channel.join().then(conn => {
            console.log("works !");
            message.channel.send("!play welcome to the disco yung bae");
        });
        channel.leave();

    }

});




client.login(config.BOT_TOKEN);

