document.addEventListener('DOMContentLoaded', () => {
	UpdateRandomColor();
});

document.addEventListener("keydown", (ev: KeyboardEvent) => {
	if (ev.code == "Space") {
		UpdateRandomColor();
	}
})

function UpdateRandomColor(): String {
	let colors: String[] = ["amaranth-purple", "cinnammon-satin", "green", "cyan-process", "fuchsia", "lavender-floral", "middle-red", "bittersweet", "persimmon", "cosmic-cobalt"];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];

	const root: HTMLElement = document.documentElement;
	root.style.setProperty("--color", `var(--${randomColor})`)

	console.log(`Setting random color to ${randomColor}`);

	return randomColor;
}

function GetCurrentColor(): String {
	const root: HTMLElement = document.documentElement;
	return getComputedStyle(root).getPropertyValue("--color");
}

// Path: src\index.ts
