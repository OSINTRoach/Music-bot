const ms = require('ms');

module.exports = {
    name: 'test',
    description: "Test description!",
    async execute({ client, inter }) {

        const m = await inter.editReply("Test?")
        inter.editReply(`Test reply`)

    },
};