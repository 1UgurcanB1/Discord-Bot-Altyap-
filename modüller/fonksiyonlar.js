const Discord = require('discord.js');
const db = require('quick.db');
const fs = require("fs");
module.exports = (client, clientt) => {

client.panel = {};

    client.customCmds = (id, cmd) => {
    
    let komut = cmd['komut']
    let aciklama = cmd['aciklama']
    
    var array = []
	  var kontrol2 = []
    let komutlar = client.cmdd
    
    if(komutlar[id]) {
		for (var i = 0; i < Object.keys(komutlar[id]).length; i++) {
			if(komut === Object.keys(komutlar[id][i])[0].toString()) {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${aciklama}"}`))
			} else {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${komutlar[id][i][Object.keys(komutlar[id][i])].replace("\n", "\\n")}"}`))
			}
			kontrol2.push(Object.keys(komutlar[id][i])[0].toString())
		}
		if(!kontrol2.includes(komut)) {
			array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
			komutlar[id] = array

			fs.writeFile("../komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		} else {
			komutlar[id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		}
	} else {
		array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
		komutlar[id] = array

		fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
			console.log(err)
		})

		return
	}
    
  };
  
  
client.panel.ayarlarKaydetKullanici = (kullaniciID, kullanici, yeniAyar, req, res) => {
if (yeniAyar['renk']) {
db.set(`${kullanici.id}.renk`,yeniAyar['renk'])
}

if (yeniAyar['resim']) {
db.set(`${kullanici.id}.resim`, yeniAyar['resim'])
}
};
  

    client.writeSettings = (id, newSettings) => {
    
    if (!client.guilds.get(id)) return
    
    try {
      
      
      
if (newSettings['küfürEngel'] === 'Aktif') {
db.set(`kufurE_${id}`, newSettings['küfürEngel'])
}
if (!newSettings['küfürEngel']) {
db.delete(`kufurE_${id}`)
}
if (newSettings['linkEngel'] === 'Aktif') {
db.set(`reklamE_${id}`, newSettings['linkEngel'])
}
if (!newSettings['linkEngel']) {
db.delete(`reklamE_${id}`)
}
if (newSettings['capslockEngel'] === 'Aktif') {
db.set(`capsE_${id}`, newSettings['capslockEngel'])
}
if (!newSettings['capslockEngel']) {
db.delete(`capsE_${id}`)
}   
if (newSettings['guvEn']) {
db.set(`güvenlikK_${id}`, newSettings['guvEn'])
}
if (newSettings['tgknl']) {
db.set(`tag_${id}.kanal`, newSettings['tgknl'])
}
if (newSettings['gc']) {
db.set(`hgbb_${id}.kanal`, newSettings['gc'])
}
if (newSettings['otorol']) {
db.set(`otorol_${id}.rol`, newSettings['otorol'])
}
      
if (newSettings['otoRK']) {
db.set(`otorol_${id}.kanal`, newSettings['otoRK'])   
}

      
 if (newSettings['otoTag']) {
db.set(`tag_${id}.tag`, newSettings['otoTag'])   
}
 if (newSettings['prefix']) {
db.set(`prefix_${id}`, newSettings['prefix'])
}
if (newSettings['sRol']) {
db.set(`sustur_${id}.rol`, newSettings['sRol'])
}
if (newSettings['girisM']) {
db.set(`mesaj_${id}.giriş`, newSettings['girisM']);
}
if (newSettings['cikisM']) {
db.set(`mesaj_${id}.çıkış`, newSettings['cikisM']);
}
if (newSettings['sayacKanal']) {
db.set(`sayac_${id}.kanal`, newSettings['sayacKanal']);
}
if (newSettings['sayac']) {
db.set(`sayac_${id}.sayı`, newSettings['sayac']);
}
  
     } catch (err) {
      //console.error(err)
    };
        }; 


String.prototype.toProperCase = function() {
return this.charAt(0).toUpperCase() + this.slice(1); 
};

Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
console.error("Uncaught Exception: ", errorMsg);

process.exit(1);
});
};
