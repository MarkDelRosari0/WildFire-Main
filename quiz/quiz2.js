const words = ["kenny", "banana", "cherry", "grape", "orange"];
let currentWord = "";
let jumbledWord = "";

function selectRandomWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    jumbledWord = currentWord.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById("jumbledWord").textContent = jumbledWord;
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function continueGame() {
    hideModal("correctModal");
    hideModal("newWordModal");
    document.getElementById("guessInput").value = ""; // Clear input field
    selectRandomWord();
}

function retryGame() {
    hideModal("incorrectModal");
    document.getElementById("guessInput").value = ""; // Clear input field
}

function endGame() {
    hideModal("incorrectModal");
    hideModal("newWordModal");
    document.getElementById("jumbledWord").textContent = "Game Over";
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();

    if (guess === currentWord) {
        showModal("correctModal");
    } else {
        showModal("incorrectModal");
    }
}

// Initialize the game by selecting the first word
selectRandomWord();