// recuperer les elements du DOM
const display = document.querySelector("#display");
const total = document.querySelector("#total");
const bouttonsOp = document.querySelectorAll(".op");
const buttonsNumber = document.querySelectorAll(".number");
const bouttonClear = document.querySelector("#clear");
const bouttonEnter = document.querySelector("#enter");

//--------------------------------------------------------------

// AVEC EVAL

for (let index = 0; index < buttonsNumber.length; index++) {
    buttonsNumber[index].addEventListener("click", function () {
        display.innerHTML += buttonsNumber[index].innerHTML;
    })
};

bouttonsOp.forEach(bouttonOp => {
    bouttonOp.addEventListener("click", function () {
        display.innerHTML += bouttonOp.innerHTML;
        operator = bouttonOp.innerHTML;
    })
});

bouttonClear.addEventListener("click", function () {
    display.innerHTML = "";
    total.innerHTML = "";
})

bouttonEnter.addEventListener("click", function () {
    display.innerHTML = eval(display.innerHTML);
})

// --------------------------------------------------------------

// SANS EVAL

// let operator = "";
// let resultat = "";
// let nb1 = "";

// function calcul() {
//     nb1 = parseFloat(nb1);

//     if (operator === "+") return nb1 + display.innerHTML;
//     if (operator === "-") return nb1 - nb2;
//     if (operator === "/") return nb1 / nb2;
//     if (operator === "*") return nb1 * nb2;
// };


// // afficher bouttons à l'ecran
// for (let index = 0; index < buttonsNumber.length; index++) {
//     buttonsNumber[index].addEventListener("click", function () {
//         display.innerHTML += buttonsNumber[index].innerHTML;
//         nb1 = display.innerHTML;
//         console.log("la variable nb1 est egale à " + nb1);
//     })
// };

// bouttonsOp.forEach(bouttonOp => {
//     bouttonOp.addEventListener("click", function () {
//         display.innerHTML += bouttonOp.innerHTML;
//         total.innerHTML = display.innerHTML;
//         display.innerHTML = "";
//         nb2 = display.innerHTML;
//         operator = bouttonOp.innerHTML;

//         console.log("la variable operator est " + operator);
//     })
// });

// bouttonClear.addEventListener("click", function () {
//     display.innerHTML = "";
//     total.innerHTML = "";
// });

// bouttonEnter.addEventListener("click", function () {
//     calcul()
//     display.innerHTML = display.innerHTML
// });