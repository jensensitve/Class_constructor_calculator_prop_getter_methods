
class Calculator {
    constructor() {
        //properties
        this.PI = 3.141592653589793
        this.E = 2.718281828459045
    }
    //getter
    get pi() {
        return `PI (${this.PI})`
    }

    get e() {
        return `Euler's Nummer (${this.PI})`
    }
    //methods
    //gibt zurück: 'height is --- on ratio x:y'
    ratio(x, y, width) {
        const height = (width * y) / x;
        return `Die Höhe ist ${height} im Verhältnis zu ${x}:${y}`;
    }

    // gibt den prozentualen Anteil von x in y zurück.
    percentage(x, y) {
        return `Das Ergebnis ist ${(x / y) * 100}%`;
    }
    // Gibt die Summe von x addiert zu y zurück.
    add(x, y) {
        return `Das Ergebnis ist ${x + y}`
    }
    // Gibt die Differenz von x subtrahiert von y zurück
    subtract(x, y) {
        return `Das Ergebnis ist ${x - y}`
    }
    // Gibt das Produkt von x multipliziert mit y zurück.
    multiply(x, y) {
        return `Das Ergebnis ist ${x * y}`
    }
    // Gibt den Quotienten von x geteilt durch y zurück. WARNUNG: Wenn der Divisor auf 0 gesetzt wird, wird ein Fehler ausgegeben.
    divide(x, y) {
        if (y < 1) {
            throw new Error("Teilen durch 0 bei Division nicht möglich")
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#rethrowing_an_error_with_a_cause
        }
        return `Das Ergebnis ist ${x / y}`
    }
    // Gibt den Rest von x geteilt durch y zurück. WARNUNG: Wenn der Divisor auf 0 gesetzt wird, wird ein Fehler ausgegeben.
    modulation(x, y) {
        if (y < 1) {
            throw new Error("Teilen durch 0 bei modulo nicht möglich")
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#rethrowing_an_error_with_a_cause
        }
        return `Das Ergebnis ist ${x % y}`
    }
    // Gibt die Potenz von x erhöht auf y zurück.
    elevate(x, y) {
        return `Das Ergebnis ist ${Math.pow(x, y)}`
    }
    // Gibt die Quadratwurzel von x zurück.
    sqrt(x) {
        return `Das Ergebnis ist ${Math.sqrt(x)}`
    }
}

const calculate = new Calculator();

console.log(calculate.pi);
console.log(calculate.e);
console.log(calculate.ratio(4, 3, 800));
console.log(calculate.percentage(70, 10));
console.log(calculate.add(7, 7));
console.log(calculate.subtract(7, 7));
console.log(calculate.multiply(7, 7));
console.log(calculate.divide(7, 1));
console.log(calculate.modulation(7, 1));
console.log(calculate.elevate(7, 3));
console.log(calculate.sqrt(7));


