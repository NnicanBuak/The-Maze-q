import { updateRender } from "./renderEngine.js";

const container = document.getElementById("game-container");

export let uuid;
export let name;

if (localStorage.getItem("uuid") && localStorage.getItem("name")) {
	uuid = localStorage.getItem("uuid");
	name = localStorage.getItem("name");
	if (!confirm(`Use the name ${name}?`)) {
		name = prompt("Enter your name: (case insensitive)").toUpperCase();
		localStorage.setItem("name", name);
	}
} else {
	// Generate UUID
	uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});

	name = prompt("Enter your name: (case insensitive)");
	if (name) name = name.toUpperCase(); else name = "JOE"

	//Save values to local storage
	localStorage.setItem("name", name);
	localStorage.setItem("uuid", uuid);
}

// Получение карты
let map = Array.from({ length: 50 }, () =>
	Array(50).fill(...mapTiles["SPACE"])
);

// Спавн персонажа
function spawnCharacter(name, uuid, coordinates) {
	if (map[coordinates.y][coordinates.x] === mapTiles["SPACE"]) {
		map[coordinates.y][coordinates.x] =
			mapTiles["PLAYER"] + name + ";" + uuid + ";";
		console.log(`${name} spawned`);
	}
}
spawnCharacter(name, uuid, { x: 25, y: 25 });
console.log(map);

updateRender(container, map);
