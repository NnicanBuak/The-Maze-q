let menuButtons = Array.from(document.querySelectorAll("#game-menu button"));
let focusedButtonIndex = 0;

menuButtons[focusedButtonIndex].focus();

document.addEventListener("keydown", (event) => {
	const key = event.key;

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
