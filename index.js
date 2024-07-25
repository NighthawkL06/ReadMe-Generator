// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name:',
  },
  {
    type: 'input',
    name: 'nameOfReadMe',
    message: 'How will your read me be called: ',
  },
  {
    type: 'confirm',
    name: 'showDetails',
    message: 'Do you want your read me to be public?',
    choices: ['Yes', 'No'],
  },
];

inquirer.prompt(questions)
  .then(answers => {
    console.log('User responses:', answers);
  })
  .catch(error => {
    console.error('Error:', error);
  });





// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Successfully wrote data to ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    console.log('Initializing the application...');
  }
  
  init();

init();
