const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body;
    axios.post('http://localhost:3000/events', event);
    axios.post('http://localhost:3001/events', event);
    axios.post('http://localhost:3002/events', event);
    res.send({'status':'ok'})
});


app.listen(3005, () => {
    console.log('App listening on port 3005!');
});