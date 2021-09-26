const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('John', '12', 'john@fakemail.com', '(123) 456-7890');
    expect(manager.officeNumber).toBe('(123) 456-7890');
});

test('gets manager role', () => {
    const manager = new Manager('John', '12', 'john@fakemail.com', '(123) 456-7890');
    expect(manager.getRole()).toBe('Manager');
});