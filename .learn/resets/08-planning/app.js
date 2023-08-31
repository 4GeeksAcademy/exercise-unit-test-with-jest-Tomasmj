// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}

// function fromEuroTOdollar(euro){
//     let euroToDollar = oneEuroIs.USD
//     return euro * euroToDollar
// }

function fromDollarToYen(dollars) {
    let dollarToYen = oneEuroIs.JPY
    return dollars * dollarToYen
}

function fromYenToPound(yen){
    let yenToPound = oneEuroIs.GBP
    return yen * yenToPound
}



console.log(fromEuroTOdollar(3.5));
console.log(fromDollarToYen(1));


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js

module.exports = { sum, fromEuroToDollar }

module.exports = { sum,fromYenToPound }