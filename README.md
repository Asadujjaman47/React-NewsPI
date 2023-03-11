
# React NewsPI

This is a React-based news app that retrieves data from the [News API](https://newsapi.org/). Users can select from several categories including business, entertainment, general, health, science, sports, and technology to view relevant news articles. As the user scrolls down the page, additional news articles are dynamically loaded and displayed.

**[link](https://github.com/Asadujjaman47/React-NewsPI.git)**



## Features

- Display news articles by category (business, entertainment, general, health, science, sports, technology)
- Lazy loading of news data when the user scrolls the page
- Continuous integration and deployment with GitHub Actions and Netlify.
- Responsive design that works across different screen sizes

## Installation


install wih Vite and run
```bash
    yarn create vite
    yarn
    npm run dev
```

    
## Getting Started

To get started, clone the repository and install the necessary dependencies:

```bash
  git clone https://github.com/Asadujjaman47/React-NewsPI.git
  cd React-NewsPI
  yarn install
```

## Running the App

To run the app, run the following command:

```bash
  yarn dev

```

This will start the app in development mode and open it in your default browser at http://localhost:3000.









## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_NEWS_API_KEY=YOUR_API_KEY`


## API Reference

#### Get all items

```http
  GET /newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY
```

## Lessons Learned
  
During the development of this project, I have learned the following:

- Learned how to use React to build a simple React News App with News API
- Learned how to handle routing within a React application using React Router
- Learned how to manage state within functional components using the useState and useEffect Hooks
- Used Bootstrap 5 to style the application with CSS
- Used Yarn as a package manager to install the necessary dependencies for the project
- Used Vite as a build tool to run the development server and bundle the application for production.

These are valuable skills that I can apply to building more complex web applications in the future.


## Feedback

If you have any feedback, please reach out to us at asadujjaman255@gmail.com

