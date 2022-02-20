// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `
      [${license}](https://choosealicense.com/licenses/${license})
    `
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return ` This application is covered under the following license: 
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
};

function renderLicenseTOC(license) {
  if (license !== 'No License') {
    return ` [License](#license)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README - add TOC, license, badges, questions section
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## [Description](#table-of-contents)
  ${data.description}
  ## Table-of-Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - ${renderLicenseTOC(data.license)}
    - [Credits](#credits)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage ](#table-of-contents)
  ${data.usage}
  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}
  ## [Credits](#table-of-contents)
   ${data.credits}
  ## [Badges](#table-of-contents)
  ${data.badges}
  ## [Contributing](#table-of-contents)
  ${data.contributing}
  ## [Tests](#table-of-contents)
  ${data.tests}
  ## [Questions](#table-of-contents)
`;
}

module.exports = generateMarkdown;
