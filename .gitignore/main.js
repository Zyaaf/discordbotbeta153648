const Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', () => {
    bot.user.setActivity('Fortnite', {type: 'WATCHING'});
    console.log(`${bot.user.tag} est en ligne sur ${bot.guilds.size} serveurs avec ${bot.users.size} utilisateurs`);
});

bot.login(process.env.loginuser);

bot.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Une nouvelle personne vient d'entrée !")
    .setDescription(`Bienvenue **${message.author.username}** sur ` + message.guild.name + ` !\nNous sommes désormais **` + message.guild.memberCount + ` membres** !`)
    .setColor('#00FF00')
    .setTimestamp()
    bot.channels.get("547708673296826388").send(embed)
});

bot.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Une personne est parti..")
    .setDescription(`**${message.author.username}** a décidé de quitter ` + message.guild.name + ` !\nNous sommes plus que **` + message.guild.memberCount + ` membres**. :frowning:`)
    .setColor('#FF0000')
    .setTimestamp()
    bot.channels.get("547708673296826388").send(embed)
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "bvn")) {
        if (message.author.id === "353859650686550027" && "342589782205136896") {
            message.delete()
            var embed = new Discord.RichEmbed()
    .setAuthor("Une nouvelle personne vient d'entrée !")
    .setDescription(`Bienvenue **${message.author.username}** sur ` + message.guild.name + ` !\nNous sommes désormais **` + message.guild.memberCount + ` membres** !`)
    .setColor('#00FF00')
    .setTimestamp()
            message.channel.send(embed)
        }else{
            return message.reply("vous n'avez pas la permission exacte pour executer la commande **bvn**.")
        }
    }

    if(message.content.startsWith(prefix + "bye")) {
        if (message.author.id === "353859650686550027" && "342589782205136896") {
            message.delete()
            var embed = new Discord.RichEmbed()
    .setAuthor("Une personne est parti..")
    .setDescription(`**${message.author.username}** a décidé de quitter ` + message.guild.name + ` !\nNous sommes plus que **` + message.guild.memberCount + ` membres**. :frowning:`)
    .setColor('#FF0000')
    .setTimestamp()
            message.channel.send(embed)
        }else{
            return message.reply("vous n'avez pas la permission exacte pour executer la commande **bye**.")
        }
    }
});
