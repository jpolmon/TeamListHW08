const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('creates an Intern object', () => {
        const intern = new Intern('Chad', '2', 'chad@gmail.com', 'Texas A&M');
        expect(intern.name).toEqual('Chad');
        expect(intern.id).toEqual('2');
        expect(intern.email).toEqual('chad@gmail.com');
        expect(intern.school).toEqual('Texas A&M');
    });

    describe("getOfficeNum method", ( () => {
        it('Return the school of the Intern', () => {
            expect(new Intern('Chad', '2', 'chad@gmail.com', 'Texas A&M').getSchool()).toBe('Texas A&M');
        });
    }))

    describe("getRole method", ( () => {
        it('Return the role of the Intern', () => {
            expect(new Intern('Chad', '2', 'chad@gmail.com', 'Texas A&M').getRole()).toBe('Intern');
        });
    }))
})