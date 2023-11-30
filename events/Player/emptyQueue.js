const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `No more songs in the queue! ❌`})
    .setColor('#2f3136')

    global.client.user.setActivity(client.config.app.playing)
    queue.metadata.send({ embeds: [emptyQueue] })
}
