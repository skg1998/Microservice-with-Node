const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var post = {};

app.get('/posts', (req, res) => {
    res.send(post);
});

app.post('/posts', (req, res) => {
    const postId = randomBytes(4).toString('hex');
    const {title} = req.body;
    post[postId] ={
        postId,
      title
    }
    res.status(201).send(post)
});

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});