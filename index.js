const inquirer = require('inquirer');
const fs = require('fs');

// 2. 'view all departments' presents a formatted table showing DEPT NAMES and DEPT IDS

// 3. 'view all roles' presents JOB TITLE, ROLE ID, DEPT ROLE BELONGS TO, SALARY

// 4. 'view all employees' presents a formatted table showing EMPLOYEE IDS, FIRST NAMES, LAST NAMES, JOB TITLES DEPTS, SALARIES AND MANAGERS

// 5. 'add a department' prompted to enter the name of the department and that department is added to the database

// 6. 'add a role' prompted to enter the name, salary, and department for the role and that role is added to the database

// 7. 'add an employee' prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// 8. 'update an employee role' prompted to select an employee to update and their new role and this information is updated in the database

// 9. probably need an exit button again

const selectAction = () => {
    inquirer.prompt([
        {
            type: "list",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee", "Exit"],
            name: "actions"
        }
    ]).then(answer => {
        if (answer.employeeType === "Manager") {
            managerQuestions();
        } else if (answer.employeeType === "Engineer") {
            internQuestions();
        } else if (answer.employeeType === "Intern") {
            engineerQuestions();
        } else if (answer.employeeType === "Exit") {
            fs.writeFile(`teams.html`, generator(team),
                function (err) {
                    if (err) {
                        throw err
                    }
                })
            }
    })
};

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter your team members name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your team members id #:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your team members email:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your team members office number:",
            name: "officeNumber"
        }
    ])
        .then(function (response) {
            const mngr = new Manager(response.name, response.id, response.email, response.officeNumber)
            team.push(mngr);
            selectType();
        });
}

const init = () => {
    selectAction();
}

init();
