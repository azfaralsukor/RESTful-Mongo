require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port =  process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to CDN Freelancers RESTful API Server');
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));