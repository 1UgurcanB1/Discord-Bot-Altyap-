const Discord = require('discord.js');
const fs = require('fs');

exports.run = function(client, message, args) {

   let rol22=  JSON.parse(fs.readFileSync("./ayarlar/kayıtrol.json", "utf8"));
  
  
  let kanal22= JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal.json", "utf8"));
   let user = message.member
 let kanal =(kanal22[message.guild.id].kanal)
 let rol2 =(rol22[message.guild.id].rol)
  //  let kanal = kanal2; 
    var rol = message.guild.roles.find(role => role.id === rol2); 
  
    if(!kanal)return message.reply('Kayıt Kanalı Ayarlanmamış !');
    if(!rol)return message.reply('Kayıt Rolü Ayarlanmamış !');
  
    if (message.channel.id !== kanal) return message.channel.send(`Sadece <#${kanal}> Adlı Kanalda Kayıt Olabilirsiniz 🌷`).then(msg => msg.delete(10000))
    
 let isim = args[0]
 let yas = args[1]
 
  if(!isim) return message.channel.sendMessage('Seni Kayıt Etmem İçin Bir Yaş Girmelisin: `c!kayıt Ugur 17`');
  if(!yas) return message.channel.sendMessage('Seni Kayıt Etmem İçin Bir Yaş Girmelisin: `c!kayıt Ugur 17`');
  
  if (message.member.roles.has(rol)) return message.channel.send("Daha Önceden Kayıt Olmuşsun") 
   let rol33=  JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));
 let rol3 =(rol33[message.guild.id].rol)
 let kanal33=  JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));
 let kanal3 =(kanal33[message.guild.id].kanal)
 
 
 
  if(rol3) {
if(kanal3) {
message.member.addRole(rol);
  message.member.removeRole(rol3);  
  user.setNickname(`${isim} | ${yas}`)
  message.channel.send(`:scroll: ${user} Kaydınız Oluşturuldu!`);
  client.channels.get(kanal3).send(`:scroll: ${user} Adlı Kullanıcı Kayıt Işlemini Başarıyla Tamamladı. :clipboard:`)
  
}else if(!kanal3) {
  message.member.addRole(rol);
  message.member.removeRole(rol3);  
  user.setNickname(`${isim} | ${yas}`)
  message.channel.send(`:scroll: ${user} Kaydınız Oluşturuldu!`);
  
} 
    
    
    
    
  }else if(!rol3) {
   if(kanal3) {
    message.member.addRole(rol);
  user.setNickname(`${isim} | ${yas}`)
  message.channel.send(`:scroll: ${user} Kaydınız Oluşturuldu!`);
  client.channels.get(kanal3).send(`:scroll: ${user} Adlı Kullanıcı Kayıt Işlemini Başarıyla Tamamladı. :clipboard:`) 
   }else if(!kanal3) {
  
  message.member.addRole(rol);
 user.setNickname(`${isim} | ${yas}`)
  message.channel.send(`:scroll: ${user} Kaydınız Oluşturuldu!`);
   }}
  
  
  
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kayıtol'],
  permLevel: 0,
  kategori:'kayıt'
};

exports.help = {
  name: 'kayıt', 
  description: "", 
  usage: 'kayıt'
};
   