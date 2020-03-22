module.exports = async (socket, packet, spr) => {
	const emitMessage = async (msg) => {
		setTimeout(() => {
			socket.emit('Basic_Flooder__Sended', msg);
		}, 2000 + Math.random() * 2000);
	};

	if (typeof packet.amount != 'number') emitMessage('INVALID_AMOUNT');
	else if (packet.amount > 10) emitMessage('INVALID_AMOUNT');
	else if (packet.amount < 1) emitMessage('INVALID_AMOUNT');
	else if (Math.round(packet.amount) != packet.amount)
		emitMessage('INVALID_AMOUNT');
	else if (typeof packet.name != 'string') emitMessage('INVALID_NAME');
	else if (packet.name.length > 10) emitMessage('INVALID_NAME');
	else {
		spr.send({
			type: 'sendBots',
			data: {
				amount: packet.amount,
				name: packet.name
			}
		});
		emitMessage('SUCCES');
	}
};
