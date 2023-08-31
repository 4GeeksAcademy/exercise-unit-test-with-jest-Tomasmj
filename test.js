const{sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () =>{
    let total = sum(14,9)
    expect(total).toBe(23);

})

test("One Euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373); //1 dollar son 106 yens, entonces 3.5 dollars deberian ser = (3.5 * 106...)
})

test("1000 yen should be 6.25 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe(6); //1000 yen son 6.5 yens, entonces 3.5 dollars deberian ser = (3.5 * 127.9)
})