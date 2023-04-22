// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === '') {
    return ''
  } else if(data.license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(data.license === 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(data.license === 'Mozilla Public License'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if(data.license === 'GNU GPLv3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(data.license === 'Boost Software License 1.0'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if(data.license ==='The Unilicense'){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === ''){
    return ''
  } else if(data.license === 'MIT'){
    return `[${data.license} License](https://choosealicense.com/licenses/mit/)`
  } else if(data.license === 'Apache 2.0'){
    return `[${data.license} License](https://choosealicense.com/licenses/apache-2.0/)`
  } else if(data.license === 'Mozilla Public License'){
    return `[${data.license}](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if(data.license === 'GNU GPLv3'){
    return `[${data.license} License](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if(data.license === 'Boost Software License 1.0') {
    return `[${data.license}](https://choosealicense.com/licenses/bsl-1.0/)`
  } else if(data.license === 'The Unilicense'){
    return `[${data.license}](https://choosealicense.com/licenses/unlicense/)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license === '') {
    return ''
  } else {
    return `## License
  This application uses the ${data.license} License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)

  ## Description

  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contributions}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}
`;
}

module.exports = generateMarkdown;
