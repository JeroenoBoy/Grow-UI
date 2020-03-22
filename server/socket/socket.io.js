//

/**
 * Dependencies
 */

const { fork } = require('child_process');

const sendBots = require('./sendBots');
const findKahoot = require('./findKahoot');

//Socket.io
const io = require('socket.io')();
io.on('connect', async (socket) => {
	console.log('A new client connected!');

	const spr = fork('./childProcesses/bot.js');

	spr.on('exit', () => {
		console.log('Child process closed');
	});

	spr.on('message', (packet) => {
		const data = packet.data;
		switch (packet.type) {
			case 'clientBot':
				socket.emit('Finder__Response', data.msg);
				break;
			case 'fastJoin':
				socket.emit('Fastjoin__Update', data);
				break;
		}
	});

	socket.on('disconnect', () => {
		console.log('A client disconnected!');
		spr.kill();
	});

	socket.on('findKahoot', (packet) => {
		findKahoot(socket, packet, spr);
	});

	socket.on('sendBots', (packet) => {
		sendBots(socket, packet, spr);
	});

	socket.on('test', (packet) => {
		spr.send({
			type: 'testProxy',
			data: {}
		});
	});

	socket.on('fastJoin', (packet) => {
		spr.send({
			type: 'fastJoin',
			data: {
				amount: packet.amount
			}
		});
	});
});

module.exports = io;
