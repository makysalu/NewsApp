const express = require('express');
const cors = require('cors');

const newsRoutes = require('./components/news/newsRouter');
const globalErrorHandler = require('./components/error/errorController');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(newsRoutes);

app.use('*', (req, res, next) => {
    const err = new Error('undefined route');
    err.statusCode = 404;
    err.status = 'fail';
    next(err, req, res, next);
});

app.use(globalErrorHandler);

module.exports = app;