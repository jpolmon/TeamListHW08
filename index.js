const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer= require("./lib/Engineer");
const Employee = require("./lib/Employee");

let team = [];

init();


async function init() {
    team.push(
        await inquirer.prompt([
            {
                type: 'input',
                message: `Please enter the team manager's name:`,
                name: 'name'
            },
            {
                type: 'input',
                message: `Please enter the team manager's employee ID:`,
                name: 'id'
            },
            {
                type: 'input',
                message: `Please enter the team manager's email:`,
                name: 'email'
            },
            {
                type: 'input',
                message: `Please enter the team manager's office number:`,
                name: 'officeNum'
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
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's employee ID:`,
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's email:`,
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: `Please enter the engineer's GitHub username:`,
                        name: 'github'
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
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's employee ID:`,
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's email:`,
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: `Please enter the intern's school:`,
                        name: 'school'
                    }
                ])
            );
        }
        else {
            console.log('generating html');
            moreMembs = false;
        }   
    } while (moreMembs === true)   
    generateHtml(applyClasses(team));
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