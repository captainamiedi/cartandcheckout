<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Test</a></li>
      </ul>
    </li>
    <li><a href="#usage">Design Decision and Trade offs</a><li>
    <li><a href="#usage">Improvement</a><li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The project is Frontend Challenge to test proficiency with JavaScript, HTML, CSS and React. It's a simple product to cart process in an e-commerce application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [React.js](https://github.com/facebook/create-react-app)
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) & [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [Material UI](https://mui.com/material-ui/getting-started/overview/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

### Installation

_From your command line._

1. Clone the repository
    ``` $ https://github.com/captainamiedi/cartandcheckout.git ```

2. Go into the repository directory
   ``` cd cartandcheckout```

3. create .env on the root of the folder. copy what is in .env.example

3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the project
   ``` npm start ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Run Test -->
### Test
1. Install NPM packages
   ```sh
   npm install
   ```
2. Start the test
    ``` npx cypress open ```

<!-- Design Decisions and TradeOffs -->

## Design Decisions and Tradeoffs

### Design Decision
- I added price to the data coming from the API. These will enable me display prices, calculate total and increase count should reflect the total price

### Tradeoff
- Since there is no API to store cart date to database, if the page is refreshed, I didn't handle tracking the data that is in cart already.

<!-- Improvement -->
## Improvement
- Implement Pagination
- Implement cache. these will prevent calling the API several times since the data doesn't change often which will improve the performance
- Use React lazy loading to improve performance


<!-- CONTACT -->
## Contact

Bright Amidiagbe - captainamiedi1@gmail.com

Project Link: [https://github.com/captainamiedi/](https://github.com/captainamiedi/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
