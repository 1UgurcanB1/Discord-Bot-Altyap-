const express = require('express');
const app = express();
const http = require('http');
    app.get("!", (request, response) => {
    console.log(`Youtube ArdaDemr | Bot Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const ytdl = require('ytdl-core');
const chalk = require('chalk');
const fs = require('fs');
const { apikey } = require('./ayarlar.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(apikey);
const queue = new Map();
const Jimp = require('jimp');
const ffmpeg = require('ffmpeg');
const veri = require('quick.db');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.ayar = db
const useful = require('./x.js');
client.useful = useful;
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
require("./modüller/fonksiyonlar.js")(client);
client.config = require("./ayarlar.json");
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildMemberAdd', async member => {
  let püye = await db.fetch(`panelüye_${member.guild.id}`);
  let pbot = await db.fetch(`panelbot_${member.guild.id}`);
  let pkanal = await db.fetch(`panelkanal_${member.guild.id}`);
  
  if (!püye) return
  if (!pbot) return
  if (!pkanal) return
  
  member.guild.channels.get(püye).setName(`Üye sayısı: ${member.guild.memberCount}`)
  member.guild.channels.get(pbot).setName(`Bot sayısı: ${member.guild.members.filter(m => m.user.bot).size}`)
  member.guild.channels.get(pkanal).setName(`Kanal sayısı: ${member.guild.channels.size}`)
})
client.on('guildMemberRemove', async member => {
  let püye = await db.fetch(`panelüye_${member.guild.id}`);
  let pbot = await db.fetch(`panelbot_${member.guild.id}`);
  let pkanal = await db.fetch(`panelkanal_${member.guild.id}`);
  
  if (!püye) return
  if (!pbot) return
  if (!pkanal) return
  
  member.guild.channels.get(püye).setName(`Üye sayısı: ${member.guild.memberCount}`)
  member.guild.channels.get(pbot).setName(`Bot sayısı: ${member.guild.members.filter(m => m.user.bot).size}`)
  member.guild.channels.get(pkanal).setName(`Kanal sayısı: ${member.guild.channels.size}`)
})


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', async message => {
const i = await db.fetch(`prefix_${message.guild.id}`);
           
           if (message.author.bot) return
      let pref;
         
         if (i) {
          pref = i
         } else {
          pref = '/'
         }
  if (!i) { db.set(`prefix_${message.guild.id}`, '/') }

if(message.content == client.user) {
  message.reply(`Bu Sunucudaki Prefix: ${pref}`)
}
  
let mesaj = message.content.toLowerCase();
let cont = message.content.slice(pref.length).split(" ");
let args = cont.slice(1);
  let ops = {
}
}
)
client.on("message", async msg => {
  const db = require('quick.db');
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 3) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    if (msg.guild.id === "264445053596991498") return;
    msg.channel.send(`${client.emojis.get(client.emoji.levelup)}Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)};
 
  if (db.has(`roll_${msg.guild.id}`) === true) {
  if (db.has(`rollss_${msg.guild.id}`) === true) {
    
 var r = db.fetch(`roll_${msg.guild.id}`)
 var s = db.fetch(`rollss_${msg.guild.id}`)
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`<@${msg.author.id}> başarıyla **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0}** seviyeyi geçtin ve **${msg.guild.roles.get(r).name}** rolünü aldın!`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };
}};
  });

client.on('message', async message => {
    if (db.has(`spen_${message.guild.id}`) === false) return;

    let sp = await db.fetch(`spamp_${message.author.id}`);
    let sk = await db.fetch(`spamk_${message.guild.id}`);
    let sb = await db.fetch(`spamb_${message.guild.id}`);
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    
    if (sp === 7) {
      
      const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(`${message.member} eğer spam yapmaya devam edersen mutelerim!`)
      .setColor("RANDOM")
      message.channel.send(embed).then(msg => msg.delete(5000));
      
    }
    if (sp === 10) {
     
        message.guild.channels.forEach(async (channel, id) => {
        message.channel.overwritePermissions(message.member, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      }); 
      
      const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(`${message.member} kullanıcısı Spam yaptığı için **5** dakika mutelendi!`)
      .setColor("RANDOM")
      message.channel.send(embed).then(msg => msg.delete(5000));
      
      const ms = require('ms');
      
      
      setTimeout(function() {
        db.delete(`spamp_${message.author.id}`)
        message.guild.channels.forEach(async (channel, id) => {
        message.channel.overwritePermissions(message.member, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true,
        });
      });
      
      }, ms('5m')) 
if (!sk) return  
      
    if (sp === sk) {
    
     const embed = new Discord.RichEmbed() 
     .setAuthor(client.user.username, client.user.avatarURL) 
     .setDescription(`${message.member} kullanıcısı **${sk}** kez spam yaptığı için sunucudan atıldı!`)
     .setColor("RANDOM")
     message.channel.send(embed)
      
     message.guild.member(message.member).kick();
    
    } 
    if (sp === sb) {
    
     const embed = new Discord.RichEmbed() 
     .setAuthor(client.user.username, client.user.avatarURL) 
     .setDescription(`${message.member} kullanıcısı **${sb}** kez spam yaptığı için sunucudan banlandı!`)
     .setColor("RANDOM")
     message.channel.send(embed)
    
      message.guild.ban(message.member, 2);
    }
}})


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı sikerim') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir git') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktin') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'anan') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'skm') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))

	

     }
       }

     }

   }
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', async msg => {

	if (msg.author.bot) return false;
	if (!msg.content.startsWith(prefix)) return false;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.split(' ')[0].slice(ayarlar.prefix.length);
	//command = command.slice(prefix.length)

	if (command === 'çal' || command === "p" || command === "play") {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send(new Discord.RichEmbed()
      .setColor('#FF0000')
    .setDescription(':warning: | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle(':warning: | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.send(new Discord.RichEmbed()
      .setColor('#FF0000')
      .setTitle(':warning: | Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.'));
        }

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			 return msg.channel.send(new Discord.RichEmbed)
      .setTitle(`**✅ | Oynatma Listesi: **${playlist.title}** Kuyruğa Eklendi!**`)
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          
				 msg.channel.send(new Discord.RichEmbed()                  
         .setTitle(' Music | Şarkı Seçimi')
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 10 saniye içinde liste iptal edilecektir.')
         .setColor('#FF0000'));
          msg.delete(5000)
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.send(new Discord.RichEmbed()
            .setColor('#FF0000')
            .setDescription(':warning: | **Şarkı Değeri Belirtmediğiniz İçin Seçim İptal Edilmiştir**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(new Discord.RichEmbed()
          .setColor('#FF0000')
          .setDescription(':( | **Aradım Fakat Hiç Bir Sonuç Çıkmadı**'));
                }
            }
			return handleVideo(video, msg, voiceChannel);
      
		}
	} else if (command === 'geç' || command === "s" || command === "skip") {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription(' :warning: | **Lütfen öncelikle sesli bir kanala katılınız**.'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle(' :warning: | **Hiç Bir Müzik Çalmamakta**'));                                              
		serverQueue.connection.dispatcher.end('**Müziği Geçtim!**');
		return undefined;
	} else if (command === 'durdur' || command === "stop") {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('**:warning: | Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle(':warning: **| Hiç Bir Müzik Çalmamakta**'));                                              
		msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Müzik Durduruldu`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**Müzik Bitti**');
		return undefined;
	} else if (command === 'ses' || command === "volume") {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription(':warning: **| Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle(':warning:| **Hiç Bir Müzik Çalmamakta**'));                                              
		if (!args[1]) return msg.channel.send(new Discord.RichEmbed()
   .setTitle(`:warning: Şuanki Ses Seviyesi: **${serverQueue.volume}**`)
    .setColor('#FF0000'))
		serverQueue.volume = args[1];
    if(args[1] > 100) {
      msg.channel.send("100'den büyük bir ses seviyesi ayarlanamaz!")
    } else {
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(`:hammer:  Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
    .setColor('#FF0000'));     
    }               
	} else if (command === 'çalan' || command === "song" || command === "current" || command === "şarkı") {
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: | **Çalan Müzik Bulunmamakta**")
    .setColor('#FF0000'));
		return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle("  Music | Çalan")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
	} else if (command === 'sıra' || command === "liste" || command === "queue") {
    let index = 0;
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: | **Sırada Müzik Bulunmamakta**")
    .setColor('#FF0000'));
		  return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
     .setTitle(' Music | Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
	} else if (command === 'duraklat' || command === "pause") {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(new Discord.RichEmbed()
      .setTitle("**:pause_button: Müzik Senin İçin Durduruldu!**")
      .setColor('#FF0000'));
		}
		return msg.channel.send(':warning: | **Çalan Müzik Bulunmamakta**');
	} else if (command === 'devam' || command === "devam-et" || command === "devamet" || command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send(new Discord.RichEmbed()
      .setTitle("**:arrow_forward: Müzik Senin İçin Devam Etmekte!**")
      .setColor('#FF0000'));
		}
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: ** | Çalan Müzik Bulunmamakta.**")
    .setColor('#FF0000'));
	}
  

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
        durations: video.duration.seconds,
    views: video.views,
    };
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`:warning: **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`);
			queue.delete(msg.guild.id);
			return msg.channel.send(new Discord.RichEmbed()
      .setTitle(`:warning: **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`)
      .setColor('#FF0000'))
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(`:arrow_heading_up:  **${song.title}** Adlı Müzik Kuyruğa Eklendi!`)
    .setColor('#FF0000'))
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === ' :x:  | **Yayın Akış Hızı Yeterli Değil.**') console.log('Müzik Bitti.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	 serverQueue.textChannel.send(new Discord.RichEmbed()                                   
  .setTitle("** Music | 🎙 Müzik Başladı**",`https://cdn.discordapp.com/avatars/473974675194511361/6bb90de9efe9fb80081b185266bb94a6.png?size=2048`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('#FF0000'));
}  

client.login(ayarlar.token);