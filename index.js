
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is your Project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message: 'Enter a description of the Project.(Required)',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please enter a description.');
                    return false;
                };
            }
        },
        {
          type:'input',
          name:'install',
          message:'What are the instruction to install the project application?',
          validate: installInput => {
            if(installInput){
                return true;
            } else {
                console.log('Please enter instructions to instillation');
                return false;
            };
          } 
        },
        {
            type:'input',
            name:'usage',
            message:'How will your project application be used?',
            validate: usageInput => {
                if(usageInput){
                    return true;
                } else {
                    console.log('Please enter usage explanation.');
                    return false;
                };
            }
        },
        {
            type:'input',
            name:'guideline',
            message:'What guidelines does the user need to maintain?',
            validate: guidelineInput => {
                if(guidelineInput){
                    return true;
                } else {
                    console.log("Please enter guidelines.");
                    return false;
                };
            }
        },
        {
            type:'input',
            name:'instructions',
            message:'How can the user test the application?',
            validate: instructionsInput => {
                if(instructionsInput){
                    return true;
                } else {
                    console.log("Please enter test instructions.");
                    return false;
                };
            }
        },
        {
            type:'checkbox',
            name:'license',
            message:'Please select the license assigned for this project?',
            choices:['MIT', 'GNU', 'Boost', 'BSD'],
            default: 'MIT',
    
        },
        {
            type:'input',
            name:'GitHub',
            message:'What is your GitHub username?',
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log('Please enter a github username.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                };
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new promises((resolve, reject) =>{
        fs.write('README.md', fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: 'Check out your new README!'
            });
        });
    });
    
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();