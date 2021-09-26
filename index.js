const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamData = [];

const promptUser = () => {
    console.log(`
  ==================
  Add a Team Manager
  ==================
  `);

    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Name:"
            },
            {
                type: 'text',
                name: 'id',
                message: 'Employee ID:'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Email Address:'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'Office Number:'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
            }
        ])
        .then(({ name, id, email, officeNumber, menu }) => {
            const employee = new Manager(name, id, email, officeNumber);
            teamData.push(employee);
            nextPrompt(menu);
        });
};

const nextPrompt = menu => {
    if (menu === 'Add an engineer') {
        return engineerPrompt(teamData);
    } else if (menu === 'Add an intern') {
        return internPrompt(teamData);
    } else {
        console.log(teamData);
        return teamData;
    };
};

const engineerPrompt = teamData => {
    console.log(`
  ===============
  Add an Engineer
  ===============
  `);

    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Name:"
            },
            {
                type: 'text',
                name: 'id',
                message: 'Employee ID:'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Email Address:'
            },
            {
                type: 'text',
                name: 'github',
                message: 'GitHub Username:'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
            }
        ])
        .then(({ name, id, email, github, menu }) => {
            const employee = new Engineer(name, id, email, github);
            teamData.push(employee);
            nextPrompt(menu);
        });
};

const internPrompt = teamData => {
    console.log(`
  =============
  Add an Intern
  =============
  `);

    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Name:"
            },
            {
                type: 'text',
                name: 'id',
                message: 'Employee ID:'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Email Address:'
            },
            {
                type: 'text',
                name: 'school',
                message: 'School:'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
            }
        ])
        .then(({ name, id, email, school, menu }) => {
            const employee = new Intern(name, id, email, school);
            teamData.push(employee);
            nextPrompt(menu);
        });
};

promptUser();