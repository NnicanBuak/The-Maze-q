let menuButtons = Array.from(
	document.querySelectorAll("#game-menu button, #game-menu input")
);
let focusedButtonIndex = 0;

menuButtons.filter((button) => button.style.display !== "none");

menuButtons[focusedButtonIndex].focus();

window.addEventListener("keydown", (event) => {
	const key = event.key;
	if (key === "ArrowRight" || key === "Enter") {
		if (menuButtons[focusedButtonIndex].value === "settings") {
			const settingsContent = document.querySelector("#settings-content");
			const displayContent = document.querySelector("#display-content");
			if (settingsContent.style.display === "none") {
				displayContent.style.display = "none";
				settingsContent.style.display = "block";
			} else {
				displayContent.style.display = "block";
				settingsContent.style.display = "none";
			}
		}
	}
	if (key === "ArrowUp") {
		focusedButtonIndex =
			focusedButtonIndex === 0
				? menuButtons.length - 1
				: focusedButtonIndex - 1;
	} else if (key === "ArrowDown") {
		focusedButtonIndex =
			focusedButtonIndex === menuButtons.length - 1
				? 0
				: focusedButtonIndex + 1;
	} else {
		return;
	}

	menuButtons.forEach((button) => button.blur());
	menuButtons[focusedButtonIndex].focus();
});
