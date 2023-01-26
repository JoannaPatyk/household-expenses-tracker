const express = require('express');
const bodyParser = require('body-parser');
const categoryRouters = require('./routes/categoryRoutes');
const expenseRouters = require('./routes/expenseRoutes');
const budgetRouters = require('./routes/budgetRouters');
const cors = require('cors');
const { server_port, server_host } = require('./config');

const app = express();

// database
require('./database/mongoose');

// parser
app.use(bodyParser.json());

// cors
app.use(cors());

// routes
app.use('/api/v1', categoryRouters);
app.use('/api/v1', expenseRouters);
app.use('/api/v1', budgetRouters);

// routes error handling
app.use((req, res) => {
    const error = new Error('Not found');
    error.status = 404;
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// server
app.listen(server_port, () => {
    console.log(`Server listens at: http://${server_host}:${server_port}`);
});
