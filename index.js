/* Made by Kam#4599 on Discord */
/* GitHub Repository made on 12/15/2021 */
/* Coded on 12/15/2021 */
/* When you fork this code you must paste your bot token in config.json and env. You must also select Node.JS as the lanuage, node index.js as your starting command, 
remove all comments in config.json, and lastyly, you must install all the packages needed for this code.  (This message is a comment btw) */

const Discord = require("discord.js");
let client = new Discord.Client();

const Database = require("@replit/database");
let db = new Database();

let { prefix } = require("./config.json");
let { tags }  = require("./config.json");
let { token } = require("./config.json")||process.env.token;

client.on("ready", async () => {
 console.log(`${client.user.tag} is Running!`);
 console.log(`Prefix: `+prefix);
 console.log(`Token: `+token);
})

client.on("message", async (message) => {
 if(message.content.startsWith(prefix+tags)) {

let member = message.author;
var id;
id = message.author.username;

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return

/* db.set(`collection_${member.id}`, collection + message.author.id); */

}
});

client.login(process.env.token||config.token||token);
