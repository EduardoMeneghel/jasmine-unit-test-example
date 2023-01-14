class Utilities{

    fahrenheitToCelsius (fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    calculateAreaCircle (raio) {
        return Math.PI * Math.pow(raio, 2);
    }

    

}

module.exports = Utilities;