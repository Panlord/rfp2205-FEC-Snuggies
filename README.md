# Project Atelier

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
</div>

<h4 align="center">A modern reimagining of an eCommerce products page.</h4>

## Motivation and Story
Tasked by a client to recreate their products page to be more in line with modern design ideas, we took on the task and created a brand new user interface for their website. 

All components in this repo have been written from scratch using React and Styled Components

## Features

### Product Overview
Gallery/Styles             
:-------------------------:
![Gallery/Styles ](https://i.imgur.com/aOPcmrR.gif)

Built by <a href=https://github.com/Panlord>Aaron Pan</a>

<b>Features</b>
- Image gallery carousel with 2.5x zoom functionality
- Style selector that dynamically renders based on each product's available styles
- Size Selector that changes based on selected product's availability
- Add to cart functionality
- Social media sharing buttons

### Related Items & Your Outfit
Product Carousel             |  Comparison Modal
:-------------------------:|:-------------------------:
![Product Carousel](https://imgur.com/21eqoHv.gif)  |  ![Comparison Modal](https://imgur.com/2TfXtaj.gif)

Built by <a href=https://github.com/mrdooby>Clayton Chin</a>

<b>Features</b>

- Related items that dynamically generated based on the item currently being viewed
- If an item is clicked on, a modal will appear with a comparison of the features of the current item and the item selected
- A 'Your Outfit' section which allows you to save the currently viewed item into a list that persists while traversing the site

### Questions & Answers
Add a Question Modal     |  Navigating the Q&A List
:-------------------------:|:-------------------------:
![Add a Question Modal](https://i.imgur.com/HDuJyeM.gif)  |  ![Navigating the Q&A List](https://i.imgur.com/jj7BpZ2.gif)

Built by <a href=https://github.com/justjjasper>Jasper Bucad</a>

<b>Features</b>
- The questions and answers load two at a time, every time the respective buttons are clicked on
- Search functionality to look for a specific question
- Add questions and answers through filling out a form in a custom modal

### Ratings & Reviews
<img src="https://imgur.com/i0XpPIF.gif" />

Built by <a href=https://github.com/dondo5252>David Arredondo</a>
  
<b>Features</b>
- Reviews load two at a time
- Searching the reviews allows for the ability to search by keyword
- Sorting reviews by the star rating
- Sorting by Helpfulness, Newest, Relevance
- The ability to Add a new review as well as upload review photos by utilizing the Cloudinary API
- All portions are dynamically generated based on the current product being viewed

## Code Styles
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Tech Stack
**Built with**
- [ReactJS](https://reactjs.org/) (with hooks)
- [Webpack](https://webpack.js.org/)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Axios](https://axios-http.com/)

**Styling**
- [Styled Components](https://styled-components.com/)

**Testing frameworks**
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Testing Library](https://github.com/testing-library/jest-dom)

**Deployment**
- [AWS](https://aws.amazon.com/) (EC2 instance)

## Contributors
**Aaron Pan (Product Overview)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aaronpan36/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Panlord) 

**Clayton Chin (Related Products)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/chinclayton/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/mrdooby) 

**Jasper Bucad (Questions & Answers)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/jasper-bucad/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/gianlazaro)](https://github.com/justjjasper) 

**David Arredondo (Ratings & Reviews)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/davidcarredondo/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/dondo5252) 

## Instructions for how to deploy the webpage:

Fork this repo into your local machine and do the following.
  
Generate your own github api key with these settings:  
- read:org  
- user  
- read:user  
- user:email  
- user:follow  

Create a .env file and add the following keys and values. Your .env file should end up looking something like this:  
  
PORT="3000"  
GITHUB_TOKEN="GITHUB_API_KEY_HERE"  

-<b>NOTE don’t include the apostrophes</b>

After finishing your .env file and saving it, you can now ```npm install``` in the root directory.

Once that finishes you can run ```npm run server-dev``` which should start up the server and also webpack.   
  
Navigate in your browser to localhost:(PORT_THAT_YOU_CHOSE_HERE) and you should see the webpage! 
  
© Strings 2022  
