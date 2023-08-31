// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}



let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}


function fromDollarToYen(dollars) {
    let euros = dollars/ oneEuroIs.USD;
    let valueInYen = euros * oneEuroIs.JPY;
    return Math.floor(valueInYen);
}

function fromYenToPound(yen){
    let euros = yen / oneEuroIs.JPY;
    let valueInPound = euros * oneEuroIs.GBP;
    return Math.floor(valueInPound);
}

console.log(fromDollarToYen(3.5))
console.log(fromYenToPound(1000));



// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js


module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }

