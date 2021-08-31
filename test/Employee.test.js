const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('creates an Employee object', () => {
        const employee = new Employee('Chad', '2', 'chad@gmail.com');
        expect(employee.name).toEqual('Chad');
        expect(employee.id).toEqual('2');
        expect(employee.email).toEqual('chad@gmail.com');
    });

    describe("getName method", ( () => {
        it('Return the name of the Employee', () => {
            expect(new Employee('Chad', '2', 'chad@gmail.com').getName()).toBe('Chad');
        }); 
    }))

    describe("getId method", ( () => {
        it('Return the id of the Employee', () => {
            expect(new Employee('Chad', '2', 'chad@gmail.com').getId()).toBe('2');
        });
    }))

    describe("getEmail method", ( () => {
        it('Return the email of the Employee', () => {
            expect(new Employee('Chad', '2', 'chad@gmail.com').getEmail()).toBe('chad@gmail.com');
        });
    }))

    describe("getRole method", ( () => {
        it('Return the role of the Employee', () => {
            expect(new Employee('Chad', '2', 'chad@gmail.com').getRole()).toBe('Employee');
        });
    }))
})