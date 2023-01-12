const Utilities = require('../utilities');

    it('convert Fahrenheit to Celsius', function() {
        let utilities = new Utilities();
        let celsius = utilities.fahrenheitToCelsius(100)

        expect(celsius).toEqual(37.77777777777778)
    });

    it('convert Fahrenheit to Celsius', function() {
        let utilities = new Utilities();
        let celsius = utilities.fahrenheitToCelsius(0)

        expect(celsius).toEqual(-17.77777777777778)
    });
