const cityWeather = require("./helper1");

test("returns an object with data, even if spelled with spaces", async () => {
	let result = await cityWeather("   dub    lin ");
	console.log("result: ", result);

	expect(typeof result).toBe("object");
});
