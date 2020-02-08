const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');

var kayıtrol = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));
  
var kayıtrol2 = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol.json", "utf8"));

var kanal = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal.json", "utf8"));

var kanal1 = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));

exports.run = (client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  var embed = new Discord.RichEmbed()
  .setColor("GRAY")
  .setAuthor(`» Kayıt Ayarları`, client.user.avatarURL)
  .setFooter(`TRCyber Bot`, client.user.avatarURL)
  .setThumbnail(`https://media.giphy.com/media/l0HeaNsyouA7XetWw/giphy.gif`)
  
  .addField('**__• Kayıt Kanalı__**', kanal[message.guild.id] ? `<#${kanal[message.guild.id].kanal}>` : `:x: Ayarlanmamış`, true)
  .addField('**__• Kayıt Bildirim Kanalı__**', kanal1[message.guild.id] ? `<#${kanal1[message.guild.id].kanal}>` : `:x: Ayarlanmamış`, true)
  .addField('**__• Kayıt Verilecek Rol__**',`<@&${kayıtrol2[message.guild.id].rol}>`)
  .addField('**__• Kayıt Alınacak Rol__**',`<@&${kayıtrol[message.guild.id].rol}>`)
  
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtayarlar'],
    permLevel: 3
  };
  
  exports.help = {
    name: 'kayıt-ayarlar',
    description: 'Sunucunuzdaki Ayarları Gorursunuz',
    usage: 'ayarlar'
  };