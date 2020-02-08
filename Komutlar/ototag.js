const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let tag = args[0];
 let tagk = message.mentions.channels.first()
  let tagg = db.fetch(`tag_${message.guild.id}`)
  let taggk = db.fetch(`tagKanal_${message.guild.id}`)
  const nitro2019 = client.emojis.get('603984148926824586');
  if (!tag) return message.channel.send('Bir tag girmelisin.')
  
    if(args[0] === "sıfırla") {
    if(!tagg) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    db.delete(`tagKanal_${message.guild.id}`)
    db.delete(`tag_${message.guild.id}`)
    message.channel.send(`Tag başarıyla sıfırlandı.`)
    return
  }
  db.set(`tagKanal_${message.guild.id}`, tagk.id)
  db.set(`tag_${message.guild.id}`, tag)
  /*const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("Tag Başarıyla Ayarlandı!")
  .addField("Ayarlanan Tag", `${tag}`)
  .addField("Ayarlanan Tag Kanalı", `${tagk}`)*/
  message.channel.send(`${nitro2019} Tag başarıyla \`${tag}\`, tag kanalı ${tagk} olarak ayarlandı.`)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag'],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Sunucuya katılan kişiye ayarlanan tagı vererek kullanıcının ismini sunucu için değiştirir.',
  usage: 'tag yazı #kanal'
};