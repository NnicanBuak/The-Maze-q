const mapTiles = {
	LEFTBORDER: String.fromCharCode(9612), //▌
	RIGHTBORDER: String.fromCharCode(9616), //▐
	FILL: String.fromCharCode(9632), //■
	SPACE: String.fromCharCode(8199), //
	PLAYER: String.fromCharCode(64), //@
	EXIT: String.fromCharCode(69), //E
	SPIKES: String.fromCharCode(9651), //△
	COIN: String.fromCharCode(169), //©
	SMALLSHADE: String.fromCharCode(9617), //░
	MEDIUMSAHADE: String.fromCharCode(9618), //▒
	LARGESHADE: String.fromCharCode(9619), //▓
};

const letters = {
	E: [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 0],
		[2, 0],
		[2, 1],
		[2, 2],
		[2, 3],
		[2, 2],
		[3, 0],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
	],
	R: [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 0],
		[1, 3],
		[2, 0],
		[2, 1],
		[2, 2],
		[3, 0],
		[3, 3],
		[4, 0],
		[4, 3],
	],
	O: [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 0],
		[1, 3],
		[2, 0],
		[2, 3],
		[3, 0],
		[3, 3],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
	],
};
