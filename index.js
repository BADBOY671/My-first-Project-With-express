const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const app = express()
const ejs = require('ejs')
const port = "8080"
app.listen(port, function(){
    console.log(`Your App Is listening  on ${port} port`)
})
var path = require("path");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));




app.get('/', async function(req,res){
const serv = client.guilds.cache.get('Guild ID Here')


res.render("index.ejs", {
    client,
    serv,
    
})
})


client.login('Your Discord Bot Token Here')
