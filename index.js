// functionality of the counter

const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");
const increaseButton = document.getElementById("increase-btn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
} 

resetButton.onclick = function() {
    count= 0;
    countLabel.textContent = count;
}
increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}