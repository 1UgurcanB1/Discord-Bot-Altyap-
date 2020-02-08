const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
const evettek = client.emojis.get('616092520148893707');  
let p = await db.fetch(`prefix_${message.guild.id}`) || '!'
let rol = message.mentions.roles.first() //| message.guild.roles.get(args.join(' '))
if (!rol) return message.channel.send(`Otorol sistemini ayarlamak için \`${p}otorol @rol\`,otorol sistemini loglu yapmak için ise; \`${p}otorol @rol #kanal\` olarak yapınız. Otorolü ve Logu sıfırlamak için \`${p}otorol-kapat\``);
let kanal = message.mentions.channels.first();
db.set(`orol_${message.guild.id}`, rol.id)
db.set(`orolk_${message.guild.id}`, kanal.id)

message.channel.send(`${evettek} Başarıyla Otorol ${rol} , otorol kanalı ${kanal}`)  
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 2
};

exports.help = {
 name: 'otorol',
 description: 'otorol <@rol> <#kanal>',
 usage: 'otorol <@rol> <#kanal>'
};