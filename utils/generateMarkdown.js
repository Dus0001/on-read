// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(license == 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == 'Boost'){
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if(license.length === 0){
        return ''
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license == "MIT"){
        return `https://opensource.org/licenses/MIT`
    } else if(license == 'Apache'){
        return `https://opensource.org/licenses/Apache-2.0`
    } else if(license == 'Boost'){
       return `https://www.boost.org/LICENSE_1_0.txt` 
    }else if(license.length === 0){
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license.length === 0){
        return ''
    } else {
return `
     ## License

    ${renderLicenseBadge(license)}

    ${renderLicenseLink(license)}
    `
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [License](#license)
  * [Descpition](#descrpition)
  * [Install](#install)
  * [Usage](#usage)
  * [Guidelines](#guidlines)
  * [Test](#test)
  * [Contact](#contact)

  ${renderLicenseSection(data.license)}

  ## Description
    ${data.description}

  ## Install
    ${data.install}
  ## Usage
    ${data.usage}
  ## Guidelines
    ${data.guideline}

  ## Test
    ${data.test}
  ## Contact
    Contact me at:
    Email: ${data.email}
    GitHub: ${data.GitHub}




`;
}

module.exports = generateMarkdown;
