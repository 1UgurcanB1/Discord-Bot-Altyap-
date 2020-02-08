const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("**Burası NSFW kanalı değil dalga mı geçiyorsun?**")
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gif'],
  permLevel: 0
};
exports.help = {
  name: 'gif',
  description: "NSFW kodudur!",
  usage: '!gif>'
};