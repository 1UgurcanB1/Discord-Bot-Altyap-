const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Genel Sürüm : 1.7 - Yapılan değişiklikler",
                    icon_url: "https://i.hizliresim.com/GyPnL6.png"
                  },
                color: 0xD97634,
                description: "**- Sistem yenilendi.\nHatalar düzeltildi! **"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyurular'],
  permLevel: 0
};

exports.help = {
  name: 'değişiklikler',
  description: 'Değişiklikleri gösterir.',
  usage: 'değişiklikler'
};
