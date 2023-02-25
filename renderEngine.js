const container = document.getElementById("game-container");
const refreshRate =
	window.screen && window.screen.refreshRate
		? 1000 / window.screen.refreshRate
		: 1000 / 60;

let matrix = Array(20).fill(Array(40).fill("#"));

// setInterval(updateRender, refreshRate);
updateRender();

function updateRender() {
	// Очистка контейнера
	container.innerHTML = "";

	// Заполнение контейнера
	matrix.forEach((row) => {
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
