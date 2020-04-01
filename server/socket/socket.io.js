//

/**
 * Dependencies
 */

//Socket.io
const io = require('socket.io')();
const dataHandler = require('../API/dataHandler.js');

io.on('connect', async (socket) => {
	console.log('A new client connected!');

	socket.on('requestContent', (pack) => {
		if (pack.time != dataHandler.time) {
			const rtr = dataHandler.get(pack.cat);
			io.emit('contentUpdate', {
				time: dataHandler.time,
				data: rtr,
				cat: pack.cat
			});
		}
		else socket.emit('contentUpdate', { err: 'Time is the same!' });
	});

	socket.on('addItem', (cat) => {
		dataHandler.add(cat);

		const rtr = dataHandler.get(cat);
		io.emit('contentUpdate', {
			time: dataHandler.time,
			data: rtr,
			cat: cat
		});
	});

	socket.on('editItem', (item) => {
		const rt = dataHandler.edit(item);
		if (rt.err) throw err;
		const rtr = dataHandler.get(item.cat);
		io.emit('contentUpdate', {
			time: dataHandler.time,
			data: rtr,
			cat: item.cat
		});
	});

	socket.on('deleteItem', (item) => {
		const rt = dataHandler.remove(item.id);
		if (rt.err) throw err;
		const rtr = dataHandler.get(item.cat);
		io.emit('contentUpdate', {
			time: dataHandler.time,
			data: rtr,
			cat: item.cat
		});
	});

	socket.on('getCatagories', (packet) => {
		socket.emit('catagoryList', dataHandler.getCatagories());
	});

	socket.on('disconnect', () => {
		console.log('A client disconnected!');
	});
});

module.exports = io;
