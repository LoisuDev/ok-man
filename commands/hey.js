const Discord = require ('discord.js')

module.exports.run = async (bot, message, args) => {
  return message.channel.send('Salut à tous !!!!!')
}

module.exports.help = {
  name : "hey"
}
