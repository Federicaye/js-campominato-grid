function createSquares(number, className) { /* funzione per creare un numero di quadrati */
    let squares = []; /* array che contine i div */
    for (let i = 0; i < number; i++) { /* ciclo che si ripete un number (argomento) di volte */
        let square = document.createElement("div"); /* variabili che contiene i div */
        let randomContent = Math.random() < 0.5 ? "fiore" : "bomba";
        /* square.innerHTML = `<span> ${randomContent}</span>`; */
        let content = document.createElement("span"); /* variabile che contiene gli span */
        content.textContent = randomContent; 
        square.appendChild(content);
        square.classList.add("square");
        square.classList.add(className);
        content.classList.add("d-none");
        square.addEventListener("click", function () {
            content.classList.remove("d-none")
        });
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
        squares = createSquares(49, "facile");
        console.log(squares);

    } else if (difficulty.value === "difficoltà2") {
        squares = createSquares(81, "medio");
        console.log(squares);
    } else if (difficulty.value === "difficoltà3") {
        squares = createSquares(100, "difficile");
        console.log(squares);
    }
    campoMinato.innerHTML = "";
    squares.forEach(square => {
        campoMinato.appendChild(square);
    });
});


