const fs = require ('fs')
const Discord = require('discord.js')
var kayıtrol = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));

exports.run = async (bot, message, args) =>
{
      let profil2 = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.sendMessage("Kayıt Rolu Ayarlamak Için Rol Etiketlemelisin. `/kayıt-alınacak-rol-ayarla @rol`".then(msg => msg.delete(5000)));
      

    if(!profil2[message.guild.id]){
    
        profil2[message.guild.id] = {
      
            rol: mentionedRole.id,

        };
    }
    
    profil2[message.guild.id].rol = mentionedRole.id

    
    fs.writeFile("./ayarlar/kayıtrol2.json", JSON.stringify(profil2), (err) => {
        console.log(err)

    })

    const embed = new Discord.RichEmbed()
        message.channel.sendMessage(`:white_check_mark: | Artık Üyeler Kayıt Olunca ${args[0]} Adlı Rol **Silinicek**`)
        
}

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['alanacakrol'],
  permlevel: 3,
  kategori:'kayıt'
};

exports.help = {
  name: 'kayıt-alınacak-rol-ayarla',
  description: 'kullanıcıdan alınacak rolü ayarlar',
  usage: 'kayıt-alınacal-rol-ayarla'
};