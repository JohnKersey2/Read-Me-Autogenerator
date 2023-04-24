// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'Please enter the title of your application.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide users installation instructions for your application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide users instructions on how to use your application.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide information collaborators need to contribute to your application.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe any tests critical to your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for your application.',
        choices: ['','MIT', 'Apache 2.0', 'Mozilla Public License', 'GNU GPLv3', 'Boost Software License 1.0', 'The Unilicense'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created file.')
    })
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = 'README2.md'
        const userInput = generateMarkdown(data)
        writeToFile(fileName, userInput);
    })
}

// Function call to initialize app
init();
