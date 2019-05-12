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
	if(command === `${prefix}sourcecode`) {
		message.channel.send("my source code is here:\n	https://github.com/baby-princess/freedom-bot.git");
	}
	if(command === `${prefix}host`) {
		message.channel.send("I am running on the following system:\nOS:\tFreeBSD 12.0-RELEASE amd64\nCPU:\tIntel Celeron G465\nGPU:\t2nd Generation Core Processor Family Integrated Graphics Controller\nRAM:4GB total");
	}
	if (command === `${prefix}copyleft`) {
		message.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/1200px-Copyleft.svg.png\nwhat is copyleft?\nit is the opisite to copyright, which aims to protect ideas, copyleft is where ideas are free to everyone, and in the public domain, and abides by the freedom of information\n\nso why bother with copyleft?\nthe right to information is a basic human right, without copyleft, this right would be nonexistant, without copyleftests the world would be locked away behind a paywal;, and constantly spying on you to ensure you do not break the copright agreement\ndo people actully use copyleft??\nYes copyleft is actully very widley adaopted, since the begining of time, as a means of sharing ideas, some notable copylefters are the GNU project (though they hold copyright in the GNU name, but the agreement is to copyleft, and disallow properierty programs to be wrote from there software)\nthe TOR project\nanyone who pirates anything ;)\n\nwhow how can i get started with copyleft?\nfor starters rip up your copyright agreements, then start sharing your ideas, and allowing collbarative efforts to make those ideas be better or work etc, allow the world to remix your idea, to formulate new ideas, start sharing scamatics, and source code, recipies etc. and finally do NOT ever confrom to copyright ideas again, you are a free being, not one that needs paywalls, most see doors, locks and walls, i see puzzles\nhttps://www.hooktube.com/watch?v=2EnX0vACj4Q");
	}
	if(command === `${prefix}suckless`){
		message.channel.send("you can find less bloated software here:\nhttps://suckless.org");
	}
	if(command === `${prefix}mobile-phones`){
		message.channel.send("mobild phones are known to track youj, through cell towers, log your location based on geolocation triangles, are almost always running propitery software, or if there not, the cell towers defintely are, so i would suggest getting rid of them if you can.");
	}
	if(command === `${prefix}unlicense`) {
	message.channel.send("Freedom bot is distrobuted under the unlicense for more details please vist this link: https://raw.githubusercontent.com/baby-princess/freedom-bot/master/UNLICENSE");
	}
	if(command === `${prefix}IRC`){
	message.channel.send("IRC has had a fairly big impact on the overall devlopments of messaging, it has allowed for people who would otherwise be censored to talk in a more open manner, it allows for journalists to communicate, it allows for orginzations to communicate etc.\n\nIt was also fundamnetally more secure then the current chat platforms we have now, as well as more private.\n\nFor these reasons i suggest everyone at least has an IRC client.")
	}
	if(command === `${prefix}man`) {
		message.channel.send("\nFREEDOM-BOT(1)\t\tManual Pager Utils\t\tFREEDOM-BOT(1)\nNAME\nfreedom-bot - A discord bot which repects free software and the GNU standards\n\nSYNOPSIS\nfreedom-bot [hello-world] | [invite] | [sourcecode] | [host] | [copyleft] | [mobile-phones] | [unlicense] | [IRC] | [man]\nDESCRIPTION\nfreedom-bot is a discord bot that respects the UNIX philosphy.\n\ndefault prefix is GNU/ \nEXAMPLES\nfreedom-bot hello-world\nruns the hello-world command\nfreedom-bot host\n displays information about the host system\n0.0.1\t\t2019-04-07\t\tFREEDOM-BOT(1)")
	}
});

// logs us in
bot.login(bot_config.token);
