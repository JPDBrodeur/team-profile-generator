const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

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
            }
        ])
        .then(({ name, id, email, officeNumber }) => {
            const employee = new Manager(name, id, email, officeNumber);
            teamData.push(employee);
            launchMenu();
        });
};

const launchMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'nextPrompt',
        message: 'What would you like to do next?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    })
    .then(({ nextPrompt }) => {
        if (nextPrompt === 'Add an engineer') {
            return engineerPrompt(teamData);
        } else if (nextPrompt === 'Add an intern') {
            return internPrompt(teamData);
        } else {
            console.log(teamData);
            return teamData; 
        };
    });
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
            }
        ])
        .then(({ name, id, email, github }) => {
            const employee = new Engineer(name, id, email, github);
            teamData.push(employee);
            launchMenu();
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
            }
        ])
        .then(({ name, id, email, school }) => {
            const employee = new Intern(name, id, email, school);
            teamData.push(employee);
            launchMenu();
        });
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

promptUser()
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });