const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help", "h"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="**"+process.env.PREFIX+cmdinfo.name+" "+cmdinfo.usage+"** ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()

      .setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setColor("RANDOME")
        .setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
        .setDescription(allcmds)
        .setFooter(`To get info of each command you can do ${process.env.PREFIX}help | Create by Mr.SIN RE#1528 :)`)
            .addField(`**Links**`, `**[Support Server](https://discord.gg/vgnhGXabNw) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot)**`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Nakhondam🤨")
            let commandinfo = new MessageEmbed()
      .setTitle(("help", { botname: message.client.user.username }))
            .setColor("RANDOM")
            .setDescription()
            .addField(`**${process.env.PREFIX}${command.info.name}**`,`${command.info.description( "")} | Aliases: (${command.info.aliases.join(", ")}` )
            message.channel.send(commandinfo)
        }
    }
}
