const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongoConnection = 'mongodb+srv://sofmazepa:JqBEdWLh!3Ma5Lh@main-database.scmde4j.mongodb.net/?retryWrites=true&w=majority'

const routes = require('./routes/homeRoutes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', 'views');

const PORT = 3400;
const start = async () => {
    mongoose.connect(mongoConnection)
        .then(() => {
            console.log('Successfully connected to the database');
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            });
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });
};

app.use('/', routes);

start();