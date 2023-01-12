const Utilities = require('../utilities');

    it('multiply 2 values', function() {
        let utilities = new Utilities();
        let celsius = utilities.fahrenheitToCelsius(100)

        expect(celsius).toEqual(37.77777777777778)
    });

    it('multiply 2 values', function() {
        let utilities = new Utilities();
        let celsius = utilities.fahrenheitToCelsius(0)

        expect(celsius).toEqual(-17.77777777777778)
    });

