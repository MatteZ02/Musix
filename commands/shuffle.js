module.exports = {
    name: 'shuffle',
    alias: 'none',
    usage: 'shuffle',
    description: 'Shuffle the queue.',
    onlyDev: false,
    permission: 'MANAGE_MESSAGES',
    category: 'music',
    execute(msg, args, client, Discord, prefix, command) {
        const serverQueue = client.queue.get(msg.guild.id);
        if (client.funcs.check(client, msg, command)) {
            client.funcs.shuffle(serverQueue.songs);
            msg.channel.send('<:shuffle:674685595980791871> Queue suffled!');
        }
    }
};