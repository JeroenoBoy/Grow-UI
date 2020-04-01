const data = require('../API/dataHandler');

const split1 = '/ehakjhh151/';
const split2 = '/eufi123/';

module.exports = () => {
	const unraw = data.getAll();
	let rtr = [];

	for (let id in unraw.catagories) {
		let cat = unraw.catagories[id];
		let d = [];
		cat.forEach((item) => {
			d.push(joinSplit('cat', id, item));
		});
		rtr.push(d.join(split1));
	}

	for (let id in unraw.items) {
		let item = unraw.items[id];
		let d = [];
		for (let id2 in item) {
			d.push(joinSplit('item', id, id2, typeof item[id2], item[id2]));
		}
		rtr.push(d.join(split1));
	}

	// for (let id in unraw) {
	// 	cat = unraw[id];
	// 	if (id != 'time') {
	// 		let d = [];
	// 		cat.forEach((item) => {
	// 			i++;
	// 			for (let a in item) {
	// 				d.push(
	// 					`${id}${split2}${i}${split2}${a}${split2}${typeof item[
	// 						a
	// 					]}${split2}${item[a]}`
	// 				);
	// 			}
	// 		});
	// 		rtr.push(d.join(split1));
	// 	}
	// }
	return rtr.join(split1);
};

function joinSplit (...args) {
	return args.join(split2);
}
