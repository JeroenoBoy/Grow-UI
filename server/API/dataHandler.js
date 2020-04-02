const fs = require('fs');
class thisClass {
	constructor (file) {
		this.file = file;
		this.loadData();
		this.data = {};
		this.time = 0;
	}

	loadData () {
		fs.readFile(this.file, (err, raw) => {
			if (err) throw err;
			this.data = JSON.parse(raw);
			this.time = this.data.time;
		});
	}
	saveData () {
		fs.writeFile(this.file, JSON.stringify(this.data), {}, (err) => {});
	}

	add (cat) {
		if (!this.data.catagories[cat]) return { err: 'Invalid catagory' };

		let id;
		let loop = true;
		while (loop) {
			id = generateToken();
			loop = false;
			for (let v in this.data.items) if (v == id) loop = true;
		}

		this.data.items[id] = {
			id: id,
			cat: cat,
			item: '1',
			name: 'New Item',
			buy: 100,
			sell: 100,
			sellable: true
		};
		this.data.time++;
		this.data.catagories[cat].push(id);
		this.saveData();
		return true;
	}
	edit (item) {
		if (!this.data.items[item.id]) return { err: 'Invalid item' };
		this.data.items[item.id] = {
			id: item.id,
			cat: item.cat,
			item: item.item,
			name: item.name,
			buy: parseFloat(item.buy),
			sell: parseFloat(item.sell),
			sellable: item.sellable
		};
		this.data.time++;
		this.saveData();
		return { msg: 'SUCCES' };
	}

	remove (id) {
		if (!this.data.items[id]) return { err: 'Invalid item' };
		let item = this.data.items[id];

		let rtr = [];
		for (let i in this.data.catagories[item.cat])
			if (i != item.id) rtr.push(this.data.catagories[item.cat][i]);
		this.data.catagories[item.cat] = rtr;

		delete this.data.items[id];
		this.data.time++;
		this.saveData();
		return { msg: 'SUCCES' };
	}

	get (cat, item = 'all') {
		if (!this.data.catagories[cat]) return { err: 'Invalid catagory' };
		if (item == 'all') {
			const incat = this.data.catagories[cat];
			let rtr = {};
			for (let i = 0; i < incat.length; i++) {
				const item = incat[i];
				rtr[item] = this.data.items[item];
			}
			return rtr;
		}
		const tag = this.data.catagories[cat].find((v) => v.name == item);
		if (!tag) return { err: 'Invalid Item' };
		return this.items[tag];
	}

	getAll () {
		return this.data;
	}

	getCatagories () {
		let rtr = [];
		for (let cat in this.data.catagories) {
			if (cat != 'time') rtr.push(cat);
		}
		return rtr;
	}
}
const dataHandler = new thisClass('./server/data.json');

let idSymbols =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@$!&';
let idSymbolsLength = idSymbols.length;
function generateToken () {
	let token = [];
	for (let i = 0; i < 20; i++) {
		token.push(idSymbols[Math.floor(Math.random() * idSymbolsLength)]);
	}
	return token.join('');
}
module.exports = dataHandler;
