//bot başladığında hangi işlemlerin yapılacağını ayarlarsınız.


module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`${client.user.username} hazır!`);
	},
};
