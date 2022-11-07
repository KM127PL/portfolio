
// function setTheme(theme: string) {
// 	// update the body
// 	const body: HTMLElement = document.getElementsByTagName('body')[0];
// 	body.classList.remove('theme-light', 'theme-dark');
// 	body.classList.add(`theme-${theme}`);

// 	// update the button
// 	const button: HTMLElement = document.getElementById('theme-icon');

// 	if (button) {
// 		button.classList.remove('fa-sun', 'fa-moon');
// 		button.classList.add(theme === 'light' ? 'fa-moon' : 'fa-sun');
// 	}

// 	// update local storage
// 	localStorage.setItem('theme', theme);
// }

// function toggleTheme() {
// 	const theme = localStorage.getItem('theme') || 'light';
// 	setTheme(theme === 'light' ? 'dark' : 'light');
// }

document.addEventListener('DOMContentLoaded', () => {
	UpdateRandomColor();
});

document.addEventListener("keydown", (ev: KeyboardEvent) => {
	if (ev.code == "Space") {
		UpdateRandomColor();
	}
})

function UpdateRandomColor() : String {
	let colors: String[] = ["amaranth-purple", "cinnammon-satin", "green", "cyan-process", "fuchsia", "lavender-floral", "middle-red", "bittersweet", "persimmon", "cosmic-cobalt"];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];

	const root : HTMLElement = document.documentElement;
	root.style.setProperty("--color", `var(--${randomColor})`)

	console.log(`Setting random color to ${randomColor}`);

	return randomColor;
}

function GetCurrentColor() : String {
	const root : HTMLElement = document.documentElement;
	return getComputedStyle(root).getPropertyValue("--color");
}

// Path: src\index.ts
