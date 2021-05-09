// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license) {
    let badge = [];
    for(let i = 0; i < license.length; i++){
      let licenseName = license[i].split(' ')[0]
      badge.push('![badmath](https://img.shields.io/badge/license-'+ licenseName + '-blue)')
    }
    let newBadge = badge.join(' ').trim();
    return newBadge;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {  
  let linkArr = []
  for(let i = 0; i < license.length; i++){
    let licenseName = license[i].toLowerCase().split(' ')[0];
    if(licenseName === 'mit'){
      linkArr.push('https://choosealicense.com/licenses/mit/');
    } else if(licenseName === 'apache') {
      linkArr.push('https://www.apache.org/licenses/LICENSE-2.0.txt');
    } else if(licenseName === 'bsd') {
      linkArr.push('https://www.openbsd.org/policy.html');
    } else if(licenseName === 'gpl') {
      linkArr.push('https://choosealicense.com/licenses/gpl-3.0/');
    } 
  }
  return linkArr.join('<br>')
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license.length === 0) {
    let noLicense = 'No license was selected';
    return  noLicense;
  } else if(license) {    
    return renderLicenseLink(license)       
  }   
}
// Display languages selected. If none then returns that none were selected
const renderLanguages = languages => {
  if(languages.length === 0) {
    let noLanguages = "No programming languages selected";
    return noLanguages;
  } else {
    return languages.join('<br>')
  }
}

// ${data.languages.join('<br>')}
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  ## About/Description
  ${data.about}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Languages
  ${renderLanguages(data.languages)}
  ## Contributing
  Contributions by: ${data.credits}
  If you would like to contribute to this project we follow the [Contributor Covenant](https://www.contributor-covenant.org/)
  ## License
  ${renderLicenseSection(data.license)}
  ## Tests
  ${data.tests}
  ## Questions:
  If you have any questions please contact us or refer to our github below:
  Email Us At: ${data.email}
  Github Repo: ${data.link}
`;
}

module.exports = generateMarkdown;