import { drawnMatrixMessage } from "./matrixMessageWriter.js";
import { name, uuid } from "./main.js";

export function updateRender(container, map = drawnMatrixMessage("error")) {
	let viewport;
	const playerCoords = findPlayerCoordinates(map);
	if (playerCoords) {
		const { centerRow, centerCol } = playerCoords;

		// set sizes for new matrix
		const rowCount = 31;
		const columnCount = 41;

		// calculate matrix boundaries
		const top = Math.max(centerRow - rowCount / 2, 0);
		const left = Math.max(centerCol - columnCount / 2, 0);
		const bottom = Math.min(top + rowCount, map.length - 1);
		const right = Math.min(left + columnCount, map[0].length - 1);

		// create new matrix and copy required elements from old matrix
		viewport = [];
		for (let row = top; row <= bottom; row++) {
			const newRow = [];
			for (let col = left; col <= right; col++) {
				newRow.push(map[row][col]);
			}
			viewport.push(newRow);
		}
		console.log(viewport);
	} else {
		viewport = map;
	}

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
					return { j, i };
				}
			}
		}
		console.log("Player not found on map");
		return null;
	}

	function borderedMatrix(matrix) {
		const width = matrix[0].length;
		const height = matrix.length;
		let newMatrix = [];

		for (let i = 0; i < height; i++) {
			const row = [];
			row.push(String.fromCharCode(9612));
			for (let j = 0; j < width; j++) {
				row.push(matrix[i][j]);
			}
			row.push(String.fromCharCode(9616));
			newMatrix.push(row);
		}
	}

	return newMatrix;
}
