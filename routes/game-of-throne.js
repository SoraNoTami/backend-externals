const axios = require("axios");
const express = require('express');
const app = express();
const port = 8000

app.get('/game-of-throne/json', (req, res) => {
    axios('https://thronesapi.com/api/v2/Characters').then((resultat) => {
        const data = resultat.data
        res.send(data);
    });
})

app.get('/game-of-throne/url', (req, res) => {
    axios('https://thronesapi.com/api/v2/Characters').then((resultat) => {
        const data = resultat.data
        res.json(data)
    }
    );
});