// create the manager card
const generateManager = manager => {
    return `
        <div class='col-12 col-md-6 col-xl-4'>
            <article class='card bg-light shadow mb-4'>
                <div class='card-header bg-primary text-white'>
                    <h2>${manager.getName()}</h2>
                    <h3><span class="iconify" data-icon="fa-solid:mug-hot"></span> Manager</h3>
                </div>
                <ul class='list-group p-4'>
                    <li class='list-group-item'>ID: ${manager.getId()}</li>
                    <li class='list-group-item'>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
                    <li class='list-group-item'>Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </article>
        </div>
    `;
  };

// create engineer cards
const generateEngineers = engineerArray => {
    const engineerHtmlArr = engineerArray.map(engineer => {
        return `
            <div class='col-12 col-md-6 col-xl-4'>
                <article class='card bg-light shadow mb-4'>
                    <div class='card-header bg-primary text-white'>
                        <h2>${engineer.getName()}</h2>
                        <h3><span class="iconify" data-icon="fa-solid:glasses"></span> Engineer</h3>
                    </div>
                    <ul class='list-group p-4'>
                        <li class='list-group-item'>ID: ${engineer.getId()}</li>
                        <li class='list-group-item'>Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
                        <li class='list-group-item'>GitHub: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
                    </ul>
                </article>
            </div>
        `;
    });
    return `${engineerHtmlArr.join('')}`;
};

// create intern cards
const generateInterns = internArray => {
    const internHtmlArr = internArray.map(intern => {
        return `
            <div class='col-12 col-md-6 col-xl-4'>
                <article class='card bg-light shadow mb-4'>
                    <div class='card-header bg-primary text-white'>
                        <h2>${intern.getName()}</h2>
                        <h3><span class="iconify" data-icon="fa-solid:user-graduate"></span> Intern</h3>
                    </div>
                    <ul class='list-group p-4'>
                        <li class='list-group-item'>ID: ${intern.getId()}</li>
                        <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
                        <li class='list-group-item'>School: ${intern.getSchool()}</li>
                    </ul>
                </article>
            </div>
        `;
    });
    return `${internHtmlArr.join('')}`;
};

// export function to generate entire page
module.exports = teamData => {
    const manager = teamData[0];
    const engineerArray = teamData.filter(employee => employee.getRole() === 'Engineer');
    const internArray = teamData.filter(employee => employee.getRole() === 'Intern');

    return `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class='bg-danger p-5 text-white text-center mb-5'>
            <h1>My Team</h1>
        </header>
        <section class='container'>
            <div class='row justify-content-center'>
                ${generateManager(manager)}
                ${generateEngineers(engineerArray)}
                ${generateInterns(internArray)}
            </div>
        </section>
        <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
    </body>
    </html>
    `;
  };