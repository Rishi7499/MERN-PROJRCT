const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articleRouter = require('./route/articleRoute.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/articles', articleRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



