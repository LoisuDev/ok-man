const Discord = require ('discord.js');
const superagent = require ('superagent');

module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/pat`)
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
    let membre = member.displayName;
    var pat_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} fait une caresse à ${membre}`)
    .setImage(body.url)
    message.channel.send(pat_embed);
};

module.exports.help = {
  name : "pat"
};
