// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { resolve } = require('path');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'special install instructions? (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('If there are no special instructions please specify there are no special instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'conatact',
        message: 'At what email can you be reached reguarding questions about your project? (Required)',
        validate: contactInput => {
          if (contactInput) {
            return true;
          } else {
            console.log('You need to enter an email!');
            return false;
          }
        }
      },
]);
};

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
    // console.log(data);
}

// Function call to initialize app
init();
