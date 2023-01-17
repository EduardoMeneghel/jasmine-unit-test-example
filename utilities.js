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

    helloWorld(language){
        const dicionary = {
            pt: 'Olá mundo!',
            en: 'Hello world!',
            es: 'Hola mundo!'
        }
        return dicionary[language];
    }

    findByUrl(url){
        return fetch(url).then((response) => 
        {
            return response;
        })
    }
    

}

module.exports = Utilities;