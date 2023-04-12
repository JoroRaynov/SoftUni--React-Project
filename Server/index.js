const mongoose = require('mongoose');
const express = require('express');
const cors = require('./middlewares/cors');
const authController = require('./controllers/authController')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session');
const dataController = require('./controllers/dataController');


const connectionString = 'mongodb://localhost:27017/olx';

start();
async function start() {

  
        await mongoose.connect(connectionString);
        console.log('Database connected');

        const app = express();
        app.use(express.json());
        app.use(cors());
        app.use(trimBody())
        app.use(session());
        app.listen(3030, () => console.log('App is listening on port 3030...'));

        app.use('/auth', authController);
        app.use('/ads', dataController);

}

