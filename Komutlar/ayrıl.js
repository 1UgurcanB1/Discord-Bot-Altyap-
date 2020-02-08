const Discord = require('discord.js');
exports.run = async function(client, message) {
  if(!message.member.voiceChannel)
    {
      message.channel.send("Bir sesli kanalda değilsiniz!")
    }
  else
    {
      if(!message.guild.me.voiceChannel)
        {
          message.channel.send("Bir sesli kanalda değilim!")
        }
      else
        {
          let bot = message.guild.me.voiceChannelID;
          let user = message.member.voiceChannelID;
          if(bot !== user)
            {
              message.channel.send("Seninle aynı sesli kanalda değilim!")
            }
          else
            {
              message.channel.send("Kanaldan başarıyla ayrıldım!")
              message.guild.me.voiceChannel.leave();
            }
        }
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['leave', 'dc', 'disconnect', 'l'], 
  permLevel: 0 
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot kanaldan ayrılır.',
  usage: '!ayrıl'
};