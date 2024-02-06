const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())


const PORT = 3400;
const mongoConnection = 'mongodb+srv://sofmazepa:JqBEdWLh!3Ma5Lh@main-database.scmde4j.mongodb.net/?retryWrites=true&w=majority'

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

app.use('/users', routes.userRoutes);
app.use('/cookies', routes.cookieRoutes);
app.use('/', routes.homeRoutes);


start();