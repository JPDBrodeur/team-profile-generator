const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('12');
    expect(employee.email).toBe('john@fakemail.com');
});

test('gets employee name', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');
    expect(employee.getName()).toBe('John');
});

test('gets employee id', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');
    expect(employee.getId()).toBe('12');
});

test('gets employee email', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');
    expect(employee.getEmail()).toBe('john@fakemail.com');
});

test('gets employee role', () => {
    const employee = new Employee('John', '12', 'john@fakemail.com');
    expect(employee.getRole()).toBe('Employee');
});

