function createSquares(number) { /* funzione per creare un numero di quadrati */
    let squares = [];
    for (let i = 0; i < number; i++) {
        let square = document.createElement("div");
        /* square.innerHTML = `<span><a></a></span>`; */
        square.classList.add("square");
        squares.push(square);
    }
    return squares;
};

console.log(createSquares(10));

let campoMinato = document.getElementById("campoMinato"); /* prendo oggetto "campoMinato" */
/* const squares = createSquares(10); */
/* let squares = [];
squares.forEach(square => {
    campoMinato.appendChild(square);
}); */

/* let squares = createSquares(40);
squares.forEach(square => {
    campoMinato.appendChild(square); 
}); */

const difficulty = document.getElementById("difficulty"); /* prendo oggetto "difficulty" */
const play = document.getElementById("play"); /* prendo oggetto "play" */

/* let squares; */
play.addEventListener("click", function () {
    let squares = [];
    if (difficulty.value === "difficoltà1") {
        squares = createSquares(49);
        console.log(squares);
        
    } else if (difficulty.value === "difficoltà2") {
        squares = createSquares(81);
        console.log(squares);
    }
    campoMinato.innerHTML = "";
    squares.forEach(square => {
        campoMinato.appendChild(square); 
    });
});


