const Utilities = require('../utilities');
var using = require('jasmine-data-provider');

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

    it('returns only numbers', function() {
        let utilities = new Utilities();
        let str = utilities.onlyNumbers("Luka Doncic went off for a historic triple-double (60 points, 21 rebounds, 10 assists) in the comeback win over the Knicks in overtime.")

        expect(str).toContain("60");
        expect(str).toContain("21");
        expect(str).toContain("10");
    });

    describe('test addition with data provider function', function () {
        var objectDataProvider = {
            'calculate the area of ​​a circle of 2 cm': {a: 2, expected: 12.566370614359172},
            'calculate the area of ​​a circle of 59 cm': {a: 59, expected: 10935.88402714607},
            'calculate the area of ​​a circle of 0.5 cm': {a: 0.5, expected: 0.7853981633974483},
            'calculate the area of ​​a circle of -2 cm': {a: -2, expected: 12.566370614359172},
            'calculate the area of ​​a circle of 0 cm': {a: 0, expected: 0},
            'calculate the area of ​​a circle of 1 cm': {a: 1, expected: Math.PI}
        };
     
        using(objectDataProvider, function (data, description) {
            it(description, function () {
                let utilities = new Utilities();
                var result = utilities.calculateAreaCircle(data.a);
     
                expect(result).toEqual(data.expected);
            });
        });
    });