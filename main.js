const Discord = require("discord.js");
const client = new Discord.Client();

var mode = 6

var chose_changés = {
	nom: {
		ok: false,
		nouveau: "Lulu5239",
	},
	logo: {
		ok: false,
		nouveau: "https://cdn.discordapp.com/app-icons/445157515802443778/6560d7ee104cd704915625a330a0a8e4.png",
	},
	status: {
		ok: false,
		nouveau: "idle",
	},
	jeu: {
		ok: true,
		nouveau: "être hébergé par Lulu5239."
	}
}

var tokens = ["", // Lulu5239
"", // x
"", // Supprimeur
"", // RPboT
"", // LarxBot
"", // Lulu5239 - robot
"NDUzOTI3NTU1MDExOTY5MDY0.DfmGGA.30k3omR_UwAn1l27qRPqKWtLFDI"] // Le sauvage junior

var ok = []

var prefixe = "::"

if ( mode == 4 ) {
	ok.push("367645967694036994")
} else if (mode == 6){
	ok.push("442603900009185281")
}

client.on("error", (e) => console.error("\n\n"+e));
client.on("warn", (e) => console.warn("\n\n"+e));

client.on('ready', () => {
  console.log("Prêt !");
  if(chose_changés.nom.ok){client.user.setUsername(chose_changés.nom.nouveau)}
  if(chose_changés.jeu.ok){client.user.setActivity(chose_changés.jeu.nouveau, "type:PLAYING")}
  if(chose_changés.status.ok){client.user.setStatus(chose_changés.status.nouveau)}
  if(chose_changés.logo.ok){client.user.setAvatar(chose_changés.logo.nouveau)}
});

client.on("message", msg => {
	if (msg.content === (prefixe + 'off') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		msg.channel.send("<@426775253650505729>\nLe robot est éteint.");
		msg.react("✅")
		off()
	}
	if (msg.content.startsWith(prefixe + 'jeu') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		msg.channel.send("Nouveau jeu : "+msg.content.replace(prefixe + "jeu ", ""))
		client.user.setActivity(msg.content.replace(prefixe + "jeu ", ""),"PLAYING")
	  }
	  if (msg.content.startsWith(prefixe + 'status') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		if(msg.content.replace(prefixe + "status ", "")=="online"||msg.content.replace(prefixe + "status ", "")=="idle"||msg.content.replace(prefixe + "status ", "")=="dnd"||msg.content.replace(prefixe + "status ", "")=="invisible") {
		  if (msg.content===prefixe+"status online") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 255*255,
			}})
		  } else if (msg.content===prefixe+"status idle") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 16776960,
			}})
		  } else if (msg.content===prefixe+"status dnd") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 16711680,
			}})
		  } else {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			}})
		  } // Rouge : 16711680
		  client.user.setStatus(msg.content.replace(prefixe + "status ", ""))
		} else {
		  msg.channel.send({embed:{
			title: "Argument non-répertorié.",
			fields:[{
			  name: "online",
			  value: "En ligne."
			},{
			  name: "idle",
			  value: "Inactif."
			},{
			  name: "dnd",
			  value: "Ne pas déranger."
			},{
			  name: "invisible",
			  value: "Invisible."
			}],
			color: 16711680,
		  }})
		}
	}
	if(msg.content==prefixe+"aide"){
		msg.channel.send("Le préfixe est `"+prefixe+"`.")
	}
	if (msg.content.startsWith(prefixe + "liste")) {
    let sender = msg.author.username;
    let server = msg.guild.name;
    let ginfoEmbed = new Discord.RichEmbed()
        .setColor('#00FFE8')
        .addField("Liste des serveurs :", `${client.guilds.map(g => g.name).join("\n")}`)

    msg.channel.send(ginfoEmbed)
	}
	if (msg.content.startsWith(prefixe + 'dire') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
    msg.channel.send(msg.content.replace(prefixe + "dire ", ""))
    msg.delete()
  }
})

function off () {
  console.error("La commande 'off()' a été exécutée.")
  client.user.setStatus("dnd")
  setTimeout("dvgvfghfccrvggcfh",3000)
}

client.login(tokens[mode]);
