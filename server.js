let Discord = require("discord.js")
let client = new Discord.Client()

const { prefix, token } = require('./config.json');
var count = 0

var latest = "didnt work"
client.on("message", message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ /);
  const command = args.shift().toLowerCase();


  switch (command) {
    case 'ifTest':
      var time = new Date().getHours();
      if (time < 20) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      } 
      break;
    case 'creator':
      let creatorEmbed = new Discord.MessageEmbed()
        
    case 'twitter':
      message.channel.send(`https://twitter.com/Vault74_dapp
      `)
      break;
    case 'rejected':
      message.channel.send(`https://media.discordapp.net/attachments/783093399804313620/784470247477477407/unknown.png?width=608&height=144`)
      break;

    case 'test':
      if (message.member.hasPermission('KICK_MEMBERS')) {
        console.log('This member can kick');
      } else if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        console.log('This member can kick and ban');
      } else {
        console.log("This member cannot.")
      }
      break;

    case 'ping':
      if (message.member.hasPermission([`MANAGE_MESSAGES`])) {
        return message.reply("You can use this command!")
      } else {
        return message.reply("Sorry, an error occurred.")
      }
      break;

    case 'embed':
      message.author.send("test")
      let embed = new Discord.MessageEmbed()
        .setTitle("Title")
        .setDescription("Description")
        .setColor("RANDOM")
        .setFooter("Footer")
      message.channel.send(embed)
      break;

    

    case 'latest':
      console.log("a")
      var content = message.content.slice(prefix.length + command.length).trim().split('ifyoumanagetohavethisinalinkwow')
      //trims the !latest part off of the message
      if (message.member.hasPermission(['ADMINISTRATOR']) && content.length >= 2) {//checks if a user has administrator perms
        console.log(content+`b`)
        latest = content[1]
        message.channel.send(`Link updated`)
      }
      else {
        message.channel.send(content)
      }
      break;

    case "idea": 

      var array = message.content.slice(prefix.length + command.length).trim().split(`,`)

      if (!args.length) {
        message.delete()
        return message.channel.send(`You didn't provide any arguements, ${message.author}!`)

      }
      let embed3 = new Discord.MessageEmbed()
        .setTitle(array[0])
        .setDescription(array[1])
        .setColor("GREEN")
        .setFooter(`Submitted by: ${message.author.tag}`)
      message.delete()
      message.channel.send(embed3).then(sentEmbed => {
        sentEmbed.react(`<:vaultTick:783373657891667999>`)
        sentEmbed.react(`<:vaultCross:783373530552467456>`)
      })
      break;

    case 'help':
      message.channel.send(`${message.author}, a list of commands...`)
      let embed4 = new Discord.MessageEmbed()
        .setTitle("Commands")
        .setDescription("`!ping` - a test command\n `!embed` - a test embed command\n `!bug` - a WIP bug reporting command\n `!args-info` - a test arguments command\n `!help` - well... yeah\n `!dm` - a test Direct Message command\n`!prune` - very dangerous mass message delete command that shouldn't be used in any circumstances\n`!idea` - an idea reporting command\n`!github` - gives you a link to the Vault74 GitHub")
        .setColor("GREEN")
      message.channel.send(embed4)
      break;
    case 'github':
      message.channel.send(`https://github.com/RetroPronghorn/Vault74`)
      break;
  
    default:
      message.channel.send('Unknown Command! Use !help to see all valid commands.');
      break;

    case 'bug':
      const filter = m => !m.author.bot;
      let embed2 = new Discord.MessageEmbed()
      embed2.setFooter(`Submitted by: ${message.author.tag}`)
      message.channel.send(embed2)
      message.author.createDM().then(async(channel) => {
        
        
        while(count<5) {
          if(count == 0) {
            message.author.send('woo')
            const await collector = channel.createMessageCollector(filter, {time: 60000});
            collector.on('collect', mssg =>{
              message.author.send(`${msg.content}`)

            })
          }
          else if(count == 1) {
            message.author.send('woo2')
          }
          else {
            message.author.send("uh oh")
          }
          count = count + 1
       }})
      break;
        
        
        
    /*    if(yes){
        const collector = channel.createMessageCollector(filter, { max: 1, time: 60000 });
        message.author.send("blah blah")
        await collector.on('collect', msg => { 
          const title = (`${msg.content}`)
          embed2.setTitle(title)
           console.log(title+`a`)
        return;
        }) 
        }
        ).then(async(channel) =>{
            const channel1 = message.author.createDM()
            console.log("it got after then")
            const collector1 = channel1.createMessageCollector(filter, { max: 1, time: 60000 });
            message.author.send("blah blah2")
            collector1.on('collect', msg => { 
              const description1 = (`${msg.content}`)
              embed2.setTitle(description1)
              console.log(title+`b`)
            })})
*/
  }
})
client.login(token)
/*   if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    else if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`First argument: ${args[0]}`);
  }


  else if (command === 'prune') {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount < 2 || amount > 100) {
      return message.reply('You need to input a number between 2 and 100.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('There was an error trying to prune messages in this channel!');
    });
  }

  else if (command === 'react') {
    message.react('😊')
  }

  else if (command === "dm") {
    message.author.send("no")
  }
*/
  

