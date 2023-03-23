# Household Expenses Tracker

Household Expenses Tracker (HET) is an application for tracking expenses and monitor your or your family's financial situation. It allows you to save expenses at any time, plan what amounts you want to spend on particular categories of expenses, track whether a specific goal has been exceeded. The application also provide simple statistics in form of charts that visually represent the state of incurred expenses.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo-light.png">
    <img alt="logo" src="docs/logo-dark.png width="450">
</picture>
</p>

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
