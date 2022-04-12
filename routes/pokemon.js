const axios = require("axios");
const express = require('express');
const router = express.Router();
const port = 8000

router.get('/', function(req, res){
    res.json({ 'success' : true });
});

router.get('/:limit/:offset', (req, res) => {
    const limit = req.params.limit
    const offset = req.params.offset
    axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((resultat) => {
        res.json(resultat.data)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then((resultat) => {
        res.json(resultat.data)
    })
})

module.exports = router;