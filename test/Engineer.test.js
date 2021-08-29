const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('creates an Engineer object', () => {
        const engineer = new Engineer('Chad', '2', 'chad@gmail.com', 'engineer');
        expect(engineer.name).toEqual('Chad');
        expect(engineer.id).toEqual('2');
        expect(engineer.email).toEqual('chad@gmail.com');
        expect(engineer.github).toEqual('engineer');
    });

    describe("getOfficeNum method", ( () => {
        it('Return the school of the Engineer', () => {
            expect(new Engineer('Chad', '2', 'chad@gmail.com', 'engineer').getGithub()).toBe('engineer');
        });
    }))

    describe("getRole method", ( () => {
        it('Return the role of the Engineer', () => {
            expect(new Engineer('Chad', '2', 'chad@gmail.com', 'engineer').getRole()).toBe('Engineer');
        });
    }))
})