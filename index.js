// this is free software 
const bot_config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const prefix = bot_config.prefix;
// event handlers

// when the bot first comes online
bot.on('ready', async () => {
	console.log(`${bot.user.username} is online`);
	bot.user.setActivity("with libre software :)");
});

// when a new member joins the server
bot.on('guildMemberAdd', member => {
	const welcome_channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if(!welcome_channel) return;
	welcome_channel.send(`hello ${member} welcome to the freedom medow discord server`);
});

// when a member leaves the server
bot.on('guildMemberRemove', member => {
	const leave_channel = member.guild.channels.find(ch => ch.name === 'goodbye');
	if(!leave_channel) return;
	leave_channel.send(`goodbye ${member} were sorry to see you leave`);
});

// message handler

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	var sender = message.author;
	let message_array = message.content.split(" ");
	let command = message_array[0];
		if(command === `${prefix}hello-world`){
			message.channel.send("hello world!");
		}
		if(command === `${prefix}invite`){
			message.channel.send("invite me to your server with this link:\n https://discordapp.com/oauth2/authorize?client_id=564523507480920085&scope=bot");
		}
});




// logs us in
bot.login(bot_config.token);
