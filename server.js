let Discord = require("discord.js")
let Sequelize = require('sequelize')
let client = new Discord.Client()

const { prefix, token } = require('./config.json');
count = 1


/*
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
*/

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

    case 'prune':
      if(message.author.id == '<@656889527561879572>'){
        message.channel.send('no')
      }


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
    
    case 'avatar':
      message.channel.send(message.author.displayAvatarURL(message.author))
      break;
    

    case 'latest':
      var content = message.content.slice(prefix.length + 'latest'.length).trim().split('cvbaghsnbfv aaaaasdfgaksjdhfvbwbna')
      console.log(content)  
      //trims the !latest part off of the message
      if (message.member.hasPermission(['ADMINISTRATOR']) && content.length == 1) {//checks if a user has administrator perms
        console.log(content+`b`)
        latest = content[1]
        message.channel.send(`Link updated`)
      }
      else {
        message.channel.send(content)
      }
      
      break;

    case "idea": 

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

      message.delete(

      )
      message.reply('we have set you a DM with the report form.') 
      count = 0
      const filter = m => !m.author.bot;
      let embed2 = new Discord.MessageEmbed()
      embed2.setFooter(`Submitted by: ${message.author.tag}`,`${message.author.displayAvatarURL(message.author)}`)
      message.author.createDM().then(async(channel) => {
        message.author.send('What is the name for your bug?')
        
        const collector = await channel.createMessageCollector(filter, {max: 1, time: 60000});
        collector.on('collect', async msg => {
          const title = msg.content

            //Gets the user to state the info about the bug
            message.author.send("Please describe the bug here:")
            const collector2 = await channel.createMessageCollector(filter, {max: 1, time: 60000});
            collector2.on('collect', async msg => {
              const bugInfo = msg.content

              //Gets the user to state their OS Version
              message.author.send("Please state your OS (Operating System) version here:")
              const collector3 = await 
              channel.createMessageCollector(filter, {max: 1, time: 60000});
              collector3.on('collect', async msg => {
                const osv = msg.content

                //Gets the user to state their Browser Version
                message.author.send("Please state you browser version here:")
                const collector4 = await 
               channel.createMessageCollector(filter, {max: 1, time: 60000});
               collector4.on('collect', async msg => {
                 const bv = msg.content

                 //Gets the user to state how to reproduce the bug
                 message.author.send("How to reproduce?")
                 const collector5 = await 
                channel.createMessageCollector(filter, {max: 1, time: 60000});
                 collector5.on('collect', async msg => {
                   const repro = msg.content

                   //Forming the embed
                   embed2.setTitle(title)
                   embed2.addFields(
                     { name: 'Bug Info', value:bugInfo },
                     { name: 'How to reproduce', value:repro},
                     { name: '\u200B', value: '\u200B' },
                     { name: 'OS Version', value:osv , inline: true},
                     { name: 'Browser Version', value:bv , inline: true},
                   
                     
                   )
                   embed2.setTimestamp(),
                   embed2.setColor('GREEN')
                   embed2.setThumbnail('https://cdn.discordapp.com/icons/773445116572073995/5a124198a617d8312bb9a205fd46304d.png?size=128')
                   message.author.send('Are you sure you want to report this bug? `YES` or `NO`')
                   message.author.send(embed2)

                  const yes = ['yes','y','ye','yeah','yep','yepp']

                   const confirm = await channel.createMessageCollector(filter, {max: 1, time: 30000, errors: ['time'] })
                   confirm.on('collect', async msg => {
                      if(yes.includes(msg.content.toLowerCase())) {
                        message.channel.send(embed2)
                      }
                      else {
                        console.log(msg.content)
                        message.author.send('*Process Termiated*')
                      }

                   })
                   })

                 })
               })


              })

            })
          
          
          
        })
        
          
          
       /*   if(count == 0) {
            message.author.send('woo')
            console.log("ee")
            collector.on('collect', msg =>{
              message.author.send(`${msg.content}`)

            })
          }

            
          
          else if(count == 1) {
            message.author.send('woo2')
            const collector = channel.createMessageCollector(filter, {max: 1, time: 60000});
            collector.on('collect', msg =>{
              message.author.send(`${msg.content}`)
          })
          }
          else {
            message.author.send("uh oh")
          }
          */
          
       
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
  

