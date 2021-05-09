// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { resolve } = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of of your project? (required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please enter an about/description of your project (required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter your project description');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter the names of those who contributed to this project (required)',
        validate: contribInput => {
            if(contribInput) {
                return true;
            } else {
                console.log('Please enter the names of those who contributed to this project');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT License', 'Apache License', 'BSD License', 'GPL']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions.  If none enter "none". (required)',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please enter any installation instructions.  If none enter "none".');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any special use instructions.  If none enter "none". (required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter any special use instructions.  If none enter "none".');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any test information.  If none enter "none". (required)',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please enter any test information.  If none enter "none".');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the Github link to your project. (Required)',
        validate: projectLink => {
            if(projectLink) {
                return true;
            } else {
                console.log('Please enter your project link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for questions on this project. (Required)',
        validate: projectEmail => {
            if(projectEmail) {
                return true;
            } else {
                console.log('Please enter your project email');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./dist/' + fileName, generateMarkdown(data), err => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok:true,
            message: 'File Created!'
        });
    })
})
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then(function(data) {
        // create filename based on user title entered from questions above
        const filename = data.title
            .toLowerCase()
            .split(' ')
            .join('') + '.md';
        writeToFile(filename, data);
    })   
}

// Function call to initialize app
init();