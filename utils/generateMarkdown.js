// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(!license) {
        return license = ''
    } 
    return `![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### ${renderLicenseBadge()}
  ### //badge link

  ## Table of Contents
  ### License
  ### Descpition(#descrpition)
  ### Install(#Install)
  ### Usage(#Usage)
  ### Guidelines(#Guidlines)
  ### Test(#Test)
  ### Contact(#Contact)

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
    Contact me using:
    Email: ${data.email}
    GitHub: ${data.GitHub}




`;
}

module.exports = generateMarkdown;
