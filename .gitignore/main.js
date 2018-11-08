const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("n!");

bot.on('ready', () => {
    //bot.user.setActivity('n!help | ' + bot.users.size + ' users 🍁', {type: 'LISTENING'});
    //bot.user.setActivity('n!help | ' + bot.users.size + ' utilisateurs', {type: 'WATCHING'});
    //bot.user.setActivity('n!help | ' + bot.users.size + ' utilisateurs', {url:"https://www.twitch.tv/nekobot", type: "STREAMING"});
  console.log(`${bot.user.tag} est en ligne sur ${bot.guilds.size} serveurs avec ${bot.users.size} utilisateurs !`)
});

bot.login(process.env.loginuser);

bot.on('message', message => {
  const args = message.content.split(" ").slice(1);

    if (message.author.id !== config.ownerID) return;
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.slice(config.prefix.length);
    let split = command.split(" ");
    command = split[0];
    split.shift();
    let code = split.join(" ");
    if (command === "eval") {
        message.delete()
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
        let token = config.token.replace(/\./g, "\.")
        let re = new RegExp(token, 'g') 
        ev = ev.replace(re, "*R-eD-Ac-Te-D-*");
        var eval = new Discord.RichEmbed()
        .setColor('#36393F')
        .addField(":inbox_tray: Input", "```js\n"+code+"```")
        .addField(":outbox_tray:  Output", "```js\n"+ev+"```")
        .setFooter(`Neko Eval`)
        message.channel.sendEmbed(eval);
        } catch(err) {
            message.channel.sendMessage('`ERROR :` ```js\n'+err+"```")
        }
    }
});
