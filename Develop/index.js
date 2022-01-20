// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        name: 'tests',
        message: 'What tests do you provide for this application?'
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

let mockData = {
    title: 'Mock Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat ducimus labore quasi reiciendis tempore! Quam quia veritatis, unde culpa officia quo, officiis possimus magnam reprehenderit id labore quas! Deserunt possimus laboriosam illum cumque quibusdam quis harum, earum est error.',
    installation: 'Installation information',
    usage: 'usage info',
    license: 'license info',
    contributing: 'contributing info',
    tests: 'test info',
    license: 'licence choice',
    username: 'username',
    email: 'email'
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

writeToFile('./test-file.md', generateMarkdown(mockData));

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('./test-file.md', generateMarkdown(answers))
    );
};

// Function call to initialize app
init();
