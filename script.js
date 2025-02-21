document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("chessboard");

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = document.createElement("div");
            square.classList.add("square");

            // Alter Colors
            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            board.appendChild(square);
        }
    }
});