const toggleText = document.getElementById("toggleText");
const body = document.body;
toggleText.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        toggleText.textContent = "Chế độ sáng";
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleText.textContent = "Chế độ tối";
    }
});

const toggleButton = document.querySelector('.brightness-toggle');
let isBright = false;
toggleButton.addEventListener('click', () => {
    if (isBright) {
        document.body.style.filter = 'brightness(1)';
        toggleButton.textContent = 'Sáng hơn';
    } else {
        document.body.style.filter = 'brightness(1.2)';
        toggleButton.textContent = 'Tối hơn';
    }
    isBright = !isBright;
});
