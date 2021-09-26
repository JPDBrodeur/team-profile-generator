const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '12', 'john@fakemail.com', 'JPDBrodeur');
    expect(engineer.github).toBe('JPDBrodeur');
});

test('gets engineer github username', () => {
    const engineer = new Engineer('John', '12', 'john@fakemail.com', 'JPDBrodeur');
    expect(engineer.getGithub()).toBe('JPDBrodeur');
});

test('gets engineer role', () => {
    const engineer = new Engineer('John', '12', 'john@fakemail.com', 'JPDBrodeur');
    expect(engineer.getRole()).toBe('Engineer');
});