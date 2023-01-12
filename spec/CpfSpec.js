const Cpf = require('../cpf');

    it('validate if the cpf is not valid', function() {
        cpf = new Cpf();
        valid = cpf.validate("00000000000")
        expect(valid).toEqual(false)
    });

    it('create cpf and check if it is valid', function() {
        cpf = new Cpf();
        newCpf = cpf.generate();

        cpf = new Cpf();
        valid = cpf.validate(newCpf)

        expect(valid).toEqual(true)
    });

