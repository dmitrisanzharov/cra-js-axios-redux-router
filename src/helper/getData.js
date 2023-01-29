import axios from "axios";

export async function getData() {
	let res = await axios.get("https://jsonplaceholder.typicode.com/users");
	return res.data;
}

export async function getDataById(id) {
	let res = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
	return res.data;
}
