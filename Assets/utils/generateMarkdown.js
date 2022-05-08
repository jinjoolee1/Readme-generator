// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //Apache license
  if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-lavender.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  //Boost license
  if (license === "Boost Software License 1.0") {
   return `[![License](https://img.shields.io/badge/License-Boost_1.0-magenta.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }

 //MIT license
 if (license === "MIT License") {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)`
  }

 //None empty string
 if (license === "none") {
   return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  
if (license === "Apache 2.0 License") {
  return `https://opensource.org/licenses/Apache-2.0`
}
if (license === "Boost Software License 1.0") {
 return `https://www.boost.org/LICENSE_1_0.txt`
}
if (license === "The MIT License") {
 return `https://opensource.org/licenses/MIT`
}
if (license === "none") {
 return ``
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "This project has no license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;