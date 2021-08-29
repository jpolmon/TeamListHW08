const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('creates a Manager object', () => {
        const manager = new Manager('Chad', '2', 'chad@gmail.com', '123');
        expect(manager.name).toEqual('Chad');
        expect(manager.id).toEqual('2');
        expect(manager.email).toEqual('chad@gmail.com');
        expect(manager.officeNum).toEqual('123');
    });

    describe("getOfficeNum method", ( () => {
        it('Return the office number of the Manager', () => {
            expect(new Manager('Chad', '2', 'chad@gmail.com', '123').getOfficeNum()).toBe('123');
        });
    }))

    describe("getRole method", ( () => {
        it('Return the role of the Manager', () => {
            expect(new Manager('Chad', '2', 'chad@gmail.com', '123').getRole()).toBe('Manager');
        });
    }))
})