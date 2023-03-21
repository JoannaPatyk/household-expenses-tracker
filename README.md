# Household Expenses Tracker

Household Expenses Tracker (HET) is an application for tracking expenses and monitor your or your family's financial situation. It allows you to save expenses at any time, plan what amounts you want to spend on particular categories of expenses, track whether a specific goal has been exceeded. The application also provide simple statistics in form of charts that visually represent the state of incurred expenses.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo-light.png">
    <img alt="logo" src="docs/logo-dark.png width="450">
</picture>
</p>

## About this project

### Application

I made the frontend of the Household Expenses Tracker using `React` with Create React App tool. I used functional components, which helped me manage the app's state more easily. I also used some basic `hooks` like useState and useEffect. To make navigation and subpages look good, I used the `React Router` library, which gave me a bunch of cool components to work with. To make sure I didn't have to pass data between components all the time, I used the `Context API`, which made my code cleaner and easier to maintain.

To check the data types and defaults for props, I used the `prop-types` library. For styling, I used the CSS-in-JS styled-components library. It let me create separate styles for each component, which made things a lot easier to manage.

To communicate with the API, I used `axios`. This helped me make sure that everything was working as expected. To display messages to users like errors and success messages, I used the `React-Toastify` library. This helped keep users informed and made it easier for them to take action when needed. Finally, I used the `Recharts` library to make charts for the statistics tab. This made it easy to display data in a clear and attractive way, so users could understand it better.

### Backend service

The backend of the Household Expenses Tracker was built using the `Express.js` and `Node.js` as a REST API service.

The application uses the `MongoDB` database via `Mongoose` library.

To ensure secure user authentication and authorization, the Household Expenses Tracker application uses `JSON Web Tokens` (JWTs). Once a user logs in, the server issues a signed JWT that contains user information. Passwords are hashed with `bcrypt`.

### Tools

Code style is maintained using `Prettier` and code correctness is maintained using `ESLint`. Both style and correctness are checked in the CI using `GitHub Actions`. To test REST APIs I used `Postman`, and to manage MongoDB database, I used `MongoDB Atlas`.

## Quick setup and start

### Backend

To spin up server, you need instance of MongoDB. You can use [MongoDB Atlas](https://www.mongodb.com/atlas/database) or [local MongoDB](#local-mongodb) server. Next you need to provide environment variables for database connection (`DATABASE`) and reasonable secret key (`JWT_SECRET`) for Jason Web Token, for example in form of `.env` file. To do so, create `.env` file in `backend` directory and provide:

```plaintext
DATABASE=mongodb://127.0.0.1:27017/het # for local connection or provide connection link from MongoDB Atlas for remote connection
JWT_SECRET=<your secret>
```

Then you can install dependencies:

```shell
npm install
```

And finally run server by calling:

```shell
npm start
```

which should print:

```plaintext
...
Server listens at: http://localhost:5000
Connection to database succeeded: 127.0.0.1:27017/het
```

Now backend is ready to `service it's REST API`.

### Frontend

Next for application create `.env` file in `frontend` directory and provide values for backend server address (local or remote) and API version:

```plaintext
REACT_APP_SERVER_ADDRESS=http://localhost:5000
REACT_APP_API_VERSION=/api/v1
```

Then you can install dependencies:

```shell
npm install
```

And finally run application by calling:

```shell
npm start
```

which should print:

```plaintext
...
Local:            http://localhost:3000
On Your Network:  http://192.168.0.186:3000
```

Now you can use above links to `run application` in your browser.

### Local MongoDB

Guide on how to setup local MongoDB server: [link](https://zellwk.com/blog/local-mongodb/).

## API documentation

Full `REST API documentation` for backend service can be found in this [API documentation](docs/API.md).
