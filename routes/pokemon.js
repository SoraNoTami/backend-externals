const axios = require("axios");
const express = require('express');
const app = express();
const port = 8000

app.get('/pokemon/:limit/:offset', (req, res) => {
    const limit = req.params.limit
    const offset = req.params.offset
    axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((resultat) => {
        res.json(resultat.data)
    })
})

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then((resultat) => {
        res.json(resultat.data)
    })
})