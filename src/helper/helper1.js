let a = "a";
// THROW EXAMPLE

function blah() {
	let json = JSON.stringify({ age: 30 });

	try {
		let user = JSON.parse(json);
		if (!user.name) {
			throw new SyntaxError("Incomplete data: no name");
		}
		console.log(user.name);
	} catch (e) {
		console.log("JSON error", e.message);
	}
}

blah();
