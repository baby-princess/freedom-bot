# freedom-bot
the bot for freedom medow discord server

requirements:
nodejs
npm: and the discord.js libaray
a token to put in the config.json

# setup:

Install nodejs and npm if you don't already have them.

run `npm i discord.js`

go to ![https://discordapp.com/developers/applications](https://discordapp.com/developers/applications) and log in

click create app then follow the setup.

then click create bot user

then click on bot then click copy on the token.

To finish the setup make a `config.json` file with the following contents


```
{
	"token":	"your token you got from before here",
	"prefix":	"GNU/"
}
```

then finally start it with `node index.js` or if you want automatic restarts install nodemon through npm and run `nodemon index.js`

then add the bot to your server and your done

usage:
GNU/[command]

-  hello-world : prints hello world, was used as a test to see if the bot was working, was kept in becuase why not
-  invite : provides a link to invite the bot your server
-  sourcecode : provides a link to the source
-  host : prints information about the host the bot is currently running on
-  copyleft : provides information about copyleft
-  suckless : provides a link to the suckless website to get simpiler and less bloated software
-  mobile-phones : provides an overview on the state of mobile phones.
-  man : provides a UNIX man page for the bot, with help
