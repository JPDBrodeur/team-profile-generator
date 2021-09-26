const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('12');
    expect(employee.email).toBe('john@fakemail.com');
})