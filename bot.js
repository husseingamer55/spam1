const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608632632812634112")
setInterval(function() {
channel.send(`I Love JLFX_Gamer`);
}, 30)
})

client.login("NTExMjI3ODQ5NjUxNTE5NDg5.XUq9gg.osa1NKRUkYtmizGMgBGLCji1rvA");