let count = 0;

const countDisplay = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

const body = document.body

function updateDisplay(count) {
    countDisplay.innerText = count

    if (count < 0) {
        body.classList.remove("light")
        body.classList.remove("neutral")
        body.classList.add("dark")
    } else if (count > 0) {
        body.classList.remove("dark")
        body.classList.remove("neutral")
        body.classList.add("light")
    } else {
        body.classList.remove("dark")
        body.classList.remove("light")
        body.classList.add("neutral")
    }
}

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.style.color = "#4ade80"
    updateDisplay(count)
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.style.color = "#f87171"
    updateDisplay(count)
});

resetBtn.addEventListener("click", () => {
    if (confirm("Reset?")) {
        count = 0;
        countDisplay.style.color = "white"
        updateDisplay(count)
    }
});