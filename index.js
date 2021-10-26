var Discord = require('discord.js'); // Chargement de la librairie discord.js

const client = new Discord.Client();  // Création du bot
const Token = "OTAwMzgzNTY1ODYxMjUzMTUw.YXAhig.tgnfjQ7Gb0l3H_rjmw7V1s2iprA"

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
  }) 

var now = new Date();

/*console.log(now.getHours()); console.log(now.getMinutes()); //to confirm what's the value you're getting
if (now.getHours() == 12 && now.getMinutes() == 19) 
{
    client.on('message', function(message) {
        if (message.content === "$loop") { 
          var interval = setInterval (function () {
            console.log('test');
            var result = Math.floor((Math.random() * 1000) + 1)
            message.channel.send("Salut, la radio d'aujourdhui est : " + result)
          }, 1 * 10000); 
        }
        
    });    
}*/
/*const guild = client.guilds.cache.get('719251986393989220');
const channel = guild.channels.cache.get('900022370964746310');
    function TOTO(){
        
        if (now.getHours() == 12 ) { 
          var interval = setInterval (function () {
            console.log('test');
            var result = Math.floor((Math.random() * 1000) + 1)       
            channel.send('You message');
          }, 1 * 1000); 
        }
        
     }   

    TOTO();*/
    result = "0000";
    channel = client.channels.cache.get('900022370964746310');

    client.on("message",message => 
    {
    setInterval (function () {
     result = Math.floor((Math.random() * 1000) + 1)
     message.channel.send("Salut, la fréquence Radio d'aujourdhui est : " + result);
     
  }, 1 * 120000); 
})

client.on("message",message => 
{
    if(message.content === "!Radio")   
    {
        message.channel.send("Salut, la fréquence Radio d'aujourdhui est : " + result)
    }
})

client.on('error', console.error); // Afficher les erreurs

// Lancement du bot, avec le token spécifié (que vous avez généré précédemment)
client.login(Token);
