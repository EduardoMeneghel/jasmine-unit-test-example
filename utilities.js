class Utilities{

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    calculateAreaCircle(raio) {
        return Math.PI * Math.pow(raio, 2);
    }

    onlyNumbers(str){
        return str.replace(/\D+/g, '');
    }
    

}

module.exports = Utilities;