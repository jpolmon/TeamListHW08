const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer= require("./lib/Engineer");
const { doesNotMatch } = require('assert');

let team = [];

init();


async function init() {
    team.push(
        await inquirer.prompt([
            {
                type: 'input',
                message: `Please enter the team manager's name:`,
                name: 'name',
                validate: function (name) {
                    valid = /[A-Z][a-z]*/.test(name)

                    if (valid) {
                        return true;
                    }
                    else {
                        let done = this.async();
                        done('***  Please enter a valid name! ***')
                        return; 
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter the team manager's employee ID:`,
                name: 'id',
                validate: function (id) {
                    valid = /^[0-9]*[1-9][0-9]*$/.test(id)

                    if (valid) {
                        return true;
                    }
                    else {
                        let done = this.async();
                        done('***  Please enter a valid id number! ***')
                        return; 
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter the team manager's email:`,
                name: 'email',
                validate: function (email) {
                    
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } 
                    else {
                        let done = this.async();
                        done('***  Please enter a valid email! ***')
                        return;                        
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter the team manager's office number:`,
                name: 'officeNum',
                validate: function (officeNum) {
                    valid = /^[0-9]*[1-9][0-9]*$/.test(officeNum)

                    if (valid) {
                        return true;
                    }
                    else {
                        let done = this.async();
                        done('***  Please enter a valid office number! ***')
                        return; 
                    }
                }
            }
        ])
    );
    let moreMembs = true;
    do {        
        let addMore = await inquirer.prompt([
            {
                type: 'list',
                message: 'Would you like to add another team member and if so, what type?',
                choices: ['Engineer', 'Intern', 'My team is complete'],
                name: 'addMore'
            }
        ]);
        if (addMore.addMore === 'Engineer') {
            team.push(
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: `Please enter the engineer's name:`,
                        name: 'name',
                        validate: function (name) {
                            valid = /[A-Z][a-z]*/.test(name)
        
                            if (valid) {
                                return true;
                            }
                            else {
                                let done = this.async();
                                done('***  Please enter a valid name! ***')
                                return; 
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's employee ID:`,
                        name: 'id',
                        validate: function (id) {
                            valid = /^[0-9]*[1-9][0-9]*$/.test(id)
        
                            if (valid) {
                                return true;
                            }
                            else {
                                let done = this.async();
                                done('***  Please enter a valid id number! ***')
                                return; 
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's email:`,
                        name: 'email',
                        validate: function (email) {
                    
                            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                
                            if (valid) {
                                return true;
                            } 
                            else {
                                let done = this.async();
                                done('***  Please enter a valid email! ***')
                                return;                        
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's GitHub username:`,
                        name: 'github',
                        validate: function (github) {
                    
                            valid = /^[a-zA-Z]+$/.test(github)
                
                            if (valid) {
                                return true;
                            } 
                            else {
                                let done = this.async();
                                done('***  Please enter a valid github username! ***')
                                return;                        
                            }
                        }
                    }
                ])
            );
        }
        else if (addMore.addMore === 'Intern') {
            team.push(
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: `Please enter the intern's name:`,
                        name: 'name',
                        validate: function (name) {
                            valid = /[A-Z][a-z]*/.test(name)
        
                            if (valid) {
                                return true;
                            }
                            else {
                                let done = this.async();
                                done('***  Please enter a valid name! (Capitalized first letter) ***')
                                return; 
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's employee ID:`,
                        name: 'id',
                        validate: function (id) {
                            valid = /^[0-9]*[1-9][0-9]*$/.test(id)
        
                            if (valid) {
                                return true;
                            }
                            else {
                                let done = this.async();
                                done('***  Please enter a valid id number! ***')
                                return; 
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's email:`,
                        name: 'email',
                        validate: function (email) {
                    
                            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                
                            if (valid) {
                                return true;
                            } 
                            else {
                                let done = this.async();
                                done('***  Please enter a valid email! ***')
                                return;                        
                            }
                        }
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's school:`,
                        name: 'school',
                        validate: function (school) {
                            valid = /[A-Z][a-z]*/.test(school)
        
                            if (valid) {
                                return true;
                            }
                            else {
                                let done = this.async();
                                done('***  Please enter a valid school name! (Capitalized first letter) ***')
                                return; 
                            }
                        }
                    }
                ])
            );
        }
        else {
            console.log('generating html');
            moreMembs = false;
        }   
    } while (moreMembs === true)   
    fs.writeFile('./dist/index.html', generateHtml(applyClasses(team)), (err) => err ? console.error(err) : console.log('File created'));
}

function applyClasses(team) {
    let teamList = []
    team.forEach(member => {
        if (member.officeNum) {
            let manager = new Manager(member.name, member.id, member.email, member.officeNum);
            teamList.push(manager);
        } 
        else if (member.github) {
            let engineer = new Engineer(member.name, member.id, member.email, member.github);
            teamList.push(engineer); 
        }
        else {
            let intern = new Intern(member.name, member.id, member.email, member.school);
            teamList.push(intern); 
        }
    });
    console.log(teamList);
    return teamList;
}

function generateHtml(teamList) {
    let htmlContent = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Roster</title>
      </head>
    
      <body class="bg-secondary">
        <header class="jumbotron bg-dark">
          <h1 class="display-3 text-center text-light p-5 fw-bold">My Team</h1>
        </header>
        <ul class="container-fluid bg-secondary d-flex flex-column flex-md-row flex-lg-row justify-content-md-center justify-content-lg-center flex-sm-column align-items-sm-center flex-wrap">
           ${generateCards(teamList)}
        </ul>
    </body>
</html>`

    return htmlContent;
}

function generateCards(teamArray) {
    let text = '';
    teamArray.forEach(member => {
        switch (member.getRole()) {
            case 'Manager':
                cardContent = `<li class="card bg-info m-5 mw-20 shadow-lg rounded" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title fs-1">${member.getName()}</h5>
                    <p class="card-text fs-4 fw-bold">&#128526 ${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush m-3">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${member.getOfficeNum()}</li>
                </ul>
            </li>
            `
                break;
            case 'Engineer':
                cardContent = `<li class="card bg-info m-5 mw-20 shadow-lg rounded" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title fs-1">${member.getName()}</h5>
                    <p class="card-text fs-4 fw-bold">&#129299 ${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush m-3">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></li>
                </ul>
            </li>
            `
                break;
            case 'Intern':
                cardContent = `<li class="card bg-info m-5 mw-20 shadow-lg rounded" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title fs-1">${member.getName()}</h5>
                    <p class="card-text fs-4 fw-bold">&#128118 ${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush m-3">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item">School: ${member.getSchool()}</li>
                </ul>
            </li>
            `
                break;
            default:
                break;
        }

        text += cardContent
    });
    
    return text;
} 


