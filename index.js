const express = require('express'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db.config');
db.connect();



const path = require('path');
require('dotenv').config();

app.use(cors());
app.use(express.json());


const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('API LIVE!');
});

// make public a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./apis/v1/index'));

app.listen(PORT, () => {
    console.log(`🌟 App live at http://localhost:${PORT}`);
});