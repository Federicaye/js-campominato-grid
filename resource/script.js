function createSquares(number) {
    const squares = [];
    for (let i = 0; i < number; i++) {
        const square = document.createElement("div");
        /* square.innerHTML = `<span><a></a></span>`; */
        square.classList.add("square");
        squares.push(square);
    }
    return squares;

};

let campoMinato = document.getElementById("campoMinato");
/* const squares = createSquares(10); */
let squares;
squares.forEach(square => {
    campoMinato.appendChild(square);
});
console.log(squares);

const difficulty = document.getElementById("difficulty");
const play = document.getElementById("play");

difficulty.addEventListener("click", function () {
    if (difficulty.value === "difficoltà 1") {
        squares = createSquares(49);
    } else if (difficulty.value === "difficoltà 2") {
        squares = createSquares(81);
    }
    squares.forEach(square => {
        campoMinato.appendChild(square);
    });
    console.log(squares);
});


