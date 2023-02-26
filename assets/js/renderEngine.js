const container = document.getElementById("game-container");
let map = Array(30).fill(Array(40).fill("■"));

updateRender(map);

function updateRender(map = drawnMapMessage("error")) {
	// Очистка контейнера
	container.innerHTML = "";

	// Заполнение контейнера
	borderedMatrix(map).forEach((row) => {
		const rowElem = document.createElement("div");
		rowElem.classList.add("row");
		row.forEach((cell) => {
			const cellElem = document.createElement("span");
			cellElem.classList.add("cell");
			cellElem.textContent = cell;
			rowElem.appendChild(cellElem);
		});
		container.appendChild(rowElem);
	});
}

function borderedMatrix(matrix) {
	// Добавляем рамку
	const width = matrix[0].length;
	const height = matrix.length;
	const newMatrix = [];

	// Вертикальные линии и символы матрицы
	for (let i = 0; i < height; i++) {
		const row = [];
		row.push(String.fromCharCode(9612));
		for (let j = 0; j < width; j++) {
			row.push(matrix[i][j]);
		}
		row.push(String.fromCharCode(9616));
		newMatrix.push(row);
	}

	return newMatrix;
}
