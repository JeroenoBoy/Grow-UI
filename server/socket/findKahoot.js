module.exports = async (socket, packet, spr) => {
	const emitMessage = async (msg) => {
		setTimeout(() => {
			socket.emit('Finder__Response', msg);
		}, 2000 + Math.random() * 2000);
	};

	if (typeof packet.pin != 'number') emitMessage('INVALID_PIN');
	else if (typeof packet.name != 'string') emitMessage('INVALID_NAME');
	else if (packet.name.length > 20) emitMessage('INVALID_NAME');
	else {
		spr.send({
			type: 'clientBot',
			data: {
				pin: packet.pin,
				name: packet.name
			}
		});
	}
};
