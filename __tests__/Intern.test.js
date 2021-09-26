const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John', '12', 'john@fakemail.com', 'UConn');
    expect(intern.school).toBe('UConn');
});

test('gets intern school', () => {
    const intern = new Intern('John', '12', 'john@fakemail.com', 'UConn');
    expect(intern.getSchool()).toBe('UConn');
});

test('gets intern role', () => {
    const intern = new Intern('John', '12', 'john@fakemail.com', 'UConn');
    expect(intern.getRole()).toBe('Intern');
});