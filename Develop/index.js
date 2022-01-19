// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does the user install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who/what would you like to credit for this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license to use for this project -',
        choices: ['one', 'two', 'three', 'four']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => console.log(answers));
}

// Function call to initialize app
init();
