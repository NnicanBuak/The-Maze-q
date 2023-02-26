function drawnMapMessage(message) {
	const matrix = Array(30)
		.fill()
		.map(() => Array(40).fill("#"));
	let letters;
	switch (message) {
		case "error":
			letters = {
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
			break;

		default:
			return matrix;
	}

	const drawLetter = (letter, x, y) => {
		const coordinates = letters[letter];
		coordinates.forEach(([dx, dy]) => {
			matrix[x + dx][y + dy] = " ";
		});
	};

	drawLetter("E", 12, 8);
	drawLetter("R", 12, 13);
	drawLetter("R", 12, 18);
	drawLetter("O", 12, 23);
	drawLetter("R", 12, 28);

	return matrix;
}
