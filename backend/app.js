const express = require('express');
const bodyParser = require('body-parser');
const categoryRouters = require('./routes/categoryRoutes');
const expenseRouters = require('./routes/expenseRoutes');
const budgetRouters = require('./routes/budgetRouters');
const userRouters = require('./routes/userRoutes');
const groupRouters = require('./routes/groupRoutes');
const cors = require('cors');
const morgan = require('morgan');
const { server_port, server_host } = require('./config');

const app = express();

// database
require('./database/mongoose');

// parser
app.use(bodyParser.json());

// cors
app.use(cors());

// morgan
morgan.token('body', (req) => {
    return JSON.stringify(req.body);
});
if (process.env.NODE_ENV) {
    app.use(morgan(':date[iso] :method :status :response-time ms :url - :body'));
} else {
    app.use(morgan(':date[iso] :method :status :response-time ms :url'));
}

// routes
app.use('/api/v1', categoryRouters);
app.use('/api/v1', expenseRouters);
app.use('/api/v1', budgetRouters);
app.use('/api/v1', userRouters);
app.use('/api/v1', groupRouters);
app.use('/api/v1/heartbeat', (req, res) => {
    res.status(200).json({ message: 'I am alive 🎉' });
});

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
