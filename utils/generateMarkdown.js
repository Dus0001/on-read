// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(!license) {
        return license = ''
    } 
    return  '![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)'
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

  ### //badge goes here
  ### //badge link

  ## Table of Contents
  ### License
  ### Descpition
  ### Install
  ### Usage
  ### Guidelines
  ### Test
  ### Contact

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
    If there is any concern the creator can be contacted by any of the following: ${data.email}/${data.GitHub}.




`;
}

module.exports = generateMarkdown;
