import { name, uuid } from "./main.js";

export function updateRender(container, matrix, width, height) {
	const playerCoords = findPlayerCoordinates(matrix);

	let viewport = playerCoords
		? cutMatrix(matrix, playerCoords, width, height)
		: drawnMatrixMessage("error", width, height);

	container.innerHTML = ""; // Clear previous content
	borderedMatrix(viewport).forEach((row) => {
		const rowElem = document.createElement("div");
		rowElem.classList.add("row");
		row.forEach((cell) => {
			const cellElem = document.createElement("span");
			cellElem.classList.add("cell");
			cellElem.textContent = cell[0];
			rowElem.appendChild(cellElem);
		});
		container.appendChild(rowElem);
	});

	function findPlayerCoordinates(matrix) {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (matrix[i][j].includes(`${name};${uuid};`)) {
					return { x: j, y: i };
				}
			}
		}
		console.log("Player not found on map");
		return null;
	}

	function cutMatrix(matrix, { x: anchorX, y: anchorY }, width, height) {
		const MATRIX_HEIGHT = matrix.length;
		const MATRIX_WIDTH = matrix[0].length;

		if (
			anchorX < 0 ||
			anchorY < 0 ||
			anchorX >= MATRIX_WIDTH ||
			anchorY >= MATRIX_HEIGHT ||
			width <= 0 ||
			height <= 0 ||
			width > MATRIX_WIDTH ||
			height > MATRIX_HEIGHT
		) {
			return drawnMatrixMessage("error", width, height);
		}

		const top = Math.round(Math.max(anchorY - height / 2, 0));
		const left = Math.round(Math.max(anchorX - width / 2, 0));
		const bottom = Math.round(Math.min(top + height, MATRIX_HEIGHT));
		const right = Math.round(Math.min(left + width, MATRIX_WIDTH));

		const newMatrix = [];

		for (let row = top; row < bottom; row++) {
			newMatrix.push(matrix[row].slice(left, right));
		}

		return newMatrix;
	}

	function borderedMatrix(matrix) {
		const width = matrix[0].length;
		const height = matrix.length;
		let newMatrix = [];

		for (let i = 0; i < height; i++) {
			const row = [];
			row.push(mapTiles["LEFTBORDER"]);
			for (let j = 0; j < width; j++) {
				row.push(matrix[i][j]);
			}
			row.push(mapTiles["RIGHTBORDER"]);
			newMatrix.push(row);
		}
		return newMatrix;
	}

	function drawnMatrixMessage(message, width, height) {
		let matrix = Array.from({ length: height }, () =>
			Array(width).fill(mapTiles["FILL"])
		);

		const letterWidth = 4;
		const letterHeight = 5;
		const letterSpacing = 1;

		let messageLetters;
		switch (message) {
			case "error":
				messageLetters = [letters["E"], letters["R"], letters["O"]];
				break;

			default:
				return matrix;
		}

		const matrixWidth =
			message.length * (letterWidth + letterSpacing) - letterSpacing;
		const matrixHeight = letterHeight;

		const messageMatrix = Array.from({ length: matrixHeight }, () =>
			Array(matrixWidth).fill(mapTiles["SPACE"])
		);

		const drawLetter = (letter, offsetX) => {
			const coordinates = messageLetters[letter];
			coordinates.forEach(([dx, dy]) => {
				messageMatrix[dx][offsetX + dy] = " ";
			});
		};

		let offsetX = Math.floor(
			(matrixWidth -
				message.length * letterWidth -
				(message.length - 1) * letterSpacing) /
				2
		);
		for (let i = 0; i < message.length; i++) {
			drawLetter(message[i], offsetX);
			offsetX += letterWidth + letterSpacing;
		}

		return matrix;
	}
}
