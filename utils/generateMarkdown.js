//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
};

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
};

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `This application is covered under the following license: 
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
};

function renderLicenseTOC(license) {
  if (license !== 'No License') {
    return `[License](#license)`;
  } else {
    return '';
  }
}

//function to generate markdown for README 
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table-of-Contents
  [Description](#description) - 
  [Installation](#installation) - 
  [Usage](#usage) - 
  ${renderLicenseTOC(data.license)} - 
  [Credits](#credits) - 
  [Contributing](#contributing) - 
  [Tests](#tests) - 
  [Questions](#questions) 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Credits
   ${data.credits}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  You can reach me with additional questions using the following links: 

  [GitHub](https://github.com/${data.username})
  
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
