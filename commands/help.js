const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

}

module.exports.help = {
    name: "help",
}