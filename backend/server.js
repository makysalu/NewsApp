const mongoose = require('mongoose');

process.on('uncaughtException', err => {
    console.error('Uncaught exception. Shutting down...');
    console.error(err);
    process.exit(1);
});

const app = require('./index');

const database = "mongodb+srv://makysalu:j4ml1Lz7wyErxRpl@newsapp.gbc9c.mongodb.net/NewsApp?authSource=admin&replicaSet=atlas-kf93iv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(database)
    .then(con => {
        console.log('Connected to database.');
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.error('Unhandled rejection. Shutting down...');
    console.error(err.message);
    server.close(() => {
        process.exit(1);
    });
});