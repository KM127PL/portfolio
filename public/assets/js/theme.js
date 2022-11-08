document.addEventListener('DOMContentLoaded', function () {
    UpdateRandomColor();
});
document.addEventListener("keydown", function (ev) {
    if (ev.code == "Space") {
        UpdateRandomColor();
    }
});
function UpdateRandomColor() {
    var colors = ["amaranth-purple", "cinnammon-satin", "green", "cyan-process", "fuchsia", "lavender-floral", "middle-red", "bittersweet", "persimmon", "cosmic-cobalt"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var root = document.documentElement;
    root.style.setProperty("--color", "var(--" + randomColor + ")");
    console.log("Setting random color to " + randomColor);
    return randomColor;
}
function GetCurrentColor() {
    var root = document.documentElement;
    return getComputedStyle(root).getPropertyValue("--color");
}
//# sourceMappingURL=theme.js.map