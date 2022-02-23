// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username.',
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
        name: 'email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Your Project Title'
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (What, why & how?).',
        default: 'Description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'If applicable, list any collaborators with links to their GitHub profiles.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide any guidelines on how other developers can contribute to your project here:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any written tests for your application and how to run them here:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "If applicable, choose a license(s) you will use for your project. ",
        choices: ['No license', 'agpl', 'gpl', 'lgpl', 'mpl', 'apache', 'mit', 'bsl', 'unlicense']
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./dist/generated-README.md", data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been generated.');
    });
};

// TODO: Create a function to initialize app
function init() {

    // call inquirer to return prompt from the questions array
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

// Function call to initialize app
init();
