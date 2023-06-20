export const carsJSON = [
	{
		id: "646f18c67a2f3482720d70cf",
		name: "red-car-1",
		color: "lightcoral",
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/small-car-2392474-1993928.png?f=webp&w=48",
		location: [53.38970888408873, -6.22450543869382],
		rentedOut: "not-available",
		miles: 50000,
	},
	{
		id: "646f18c67a2f3482720d70d0",
		name: "red-car-2",
		color: "lightcoral",
		location: [53.37144791348412, -6.269594706494894],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/small-car-2392474-1993928.png?f=webp&w=48",
		rentedOut: "available",
		miles: 75000,
	},
	{
		id: "646f18c67a2f3482720d70d1",
		name: "blue-car-1",
		color: "lightcyan",
		location: [53.357605, -6.223773],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/cute-car-2392497-1993951.png?f=webp&w=48",
		rentedOut: "not-available",
		miles: 100000,
	},
	{
		id: "646f18c67a2f3482720d70d2",
		name: "blue-car-2",
		color: "lightcyan",
		location: [53.38738840701002, -6.1814709180642105],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/cute-car-2392497-1993951.png?f=webp&w=48",
		rentedOut: "available",
		miles: 125000,
	},
	{
		id: "646f18c67a2f3482720d70d3",
		name: "orange-car-1",
		color: "orange",
		location: [53.39284492102931, -6.249195583637723],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/laughing-car-2392488-1993942.png?f=webp&w=48",
		rentedOut: "not-available",
		miles: 150000,
	},
	{
		id: "646f18c67a2f3482720d70d4",
		name: "pink-car-1",
		color: "pink",
		location: [53.406655991806815, -6.235034806528632],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/vintage-car-2392492-1993946.png?f=webp&w=48",
		rentedOut: "not-available",
		miles: 175000,
	},
	{
		id: "646f18c67a2f3482720d70d5",
		name: "beige-car-1",
		color: "beige",
		location: [53.38604265279719, -6.256020406774416],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/jeep-2392484-1993938.png?f=webp&w=48",
		rentedOut: "available",
		miles: 200000,
	},
	{
		id: "646f18c67a2f3482720d70d6",
		name: "yellow-car-1",
		color: "yellow",
		location: [53.37603837534987, -6.239767880604335],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/open-roof-car-2392496-1993950.png?f=webp&w=48",
		rentedOut: "not-available",
		miles: 225000,
	},
	{
		id: "646f18c67a2f3482720d70d7",
		name: "yellow-car-2",
		color: "yellow",
		location: [53.3766346285211, -6.169640948151451],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/open-roof-car-2392496-1993950.png?f=webp&w=48",
		rentedOut: "available",
		miles: 250000,
	},
	{
		id: "646f18c67a2f3482720d70d8",
		name: "red-car-3",
		color: "lightcoral",
		location: [53.42689512951666, -6.230291464681101],
		icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/small-car-2392474-1993928.png?f=webp&w=48",
		rentedOut: "not-available",
		miles: 275000,
	},
];

// export const carsJSON = [
// 	{ color: "blue", name: "bmw" },
// 	// { color: "yellow" },
// 	// { color: "green" },
// 	{ color: "yellow", name: "audi" },
// ];

const filters1 = {
	color: ["yellow"],
	rentedOut: ["available"],
};

function filterArray(arr, filt) {
	//? STAGE 1: first I need to make sure that every item has KEYS in it
	let filterKeysArr = Object.keys(filt);
	console.log("filterKeysArr: ", filterKeysArr);

	let hasFilterKeysArr = arr.filter((item) => {
		return filterKeysArr.every((filterKey) => {
			return item[filterKey];
		});
	});
	// console.log(hasFilterKeysArr.length);
	// console.log(hasFilterKeysArr);

	//? Stage 2: now I need to make sure that every KEY in item is one of the items from the filters

	let final1 = [];

	hasFilterKeysArr.forEach((item) => {
		// need to get all keys and all filter values

		let test1 = filterKeysArr.every((filterKey) => {
			// console.log(filterKey);
			// console.log(item[filterKey]);
			// console.log(filters1[filterKey]);
			if (item[filterKey] === filters1[filterKey][0]) {
				final1.push(item);
			}
			// return true;
		});
	});

	console.log(final1.length);
	console.log(final1);

	// end of the function
}

filterArray(carsJSON, filters1);
