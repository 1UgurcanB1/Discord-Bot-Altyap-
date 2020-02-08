const fs = require ('fs')
const Discord = require('discord.js')
var kanal = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  
  let channel = message.mentions.channels.first()
      let kanal = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(`:x: Ayarlamam Için Log Kanalı Etiketlemelisin. Orn: \`/kanal-ayarla #logkanal\``);
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    
      

        if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }

    fs.writeFile("./ayarlar/kayıtkanal2.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
      
      
      
      

  kanal[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("./ayarlar/kayıtkanal2.json", JSON.stringify(kanal), (err) => {
        console.log(err)

    })

    
        message.channel.sendMessage(`:white_check_mark: | Kayıt Log kanalı başarıyla ${mentionedChannel} olarak ayarlandı.`)
        

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıtbildirim'],
  permlevel: 3,
  kategori:'kayıt'
};

exports.help = {
  name: 'kayıt-bildirim',
  description: 'otorol-ayarla',
  usage: 'kayıtbildirim'
};
   