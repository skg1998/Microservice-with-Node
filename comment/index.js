const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var commentsByPostId = []

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id:commentId,content});
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(3002, () => {
    console.log('App listening on port 3002!');
});