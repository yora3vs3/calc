const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                screen.textContent = "Error";
            }
        } else if (button.textContent === "C") {
            screen.textContent = "0";
        } else {
            if (screen.textContent === "0") {
                screen.textContent = button.textContent;
            } else {
                screen.textContent += button.textContent;
            }
        }
    });
});
