const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Bot Online")
});
const prefix = "s!";
client.on("message", async message => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if(message.content === `${prefix}help`){
        const Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Help Menu")
        .addFields(
            [
                {name: "s!mute", value: "נותן מיוט למי שאתה רוצה !"}
            ]
        )
    }
});

client.login(process.env.token);