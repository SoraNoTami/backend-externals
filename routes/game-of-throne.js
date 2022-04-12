const axios = require("axios");
const express = require('express');
const router = express.Router();
const port = 8000

router.get('/', function(req, res){
    res.json({ 'success' : true });
});

router.get('/json', (req, res) => {
    axios('https://thronesapi.com/api/v2/Characters').then((resultat) => {
        const data = resultat.data
        res.send(data);
    });
})

router.get('/url', (req, res) => {
    axios('https://thronesapi.com/api/v2/Characters').then((resultat) => {
        const data = resultat.data
        res.json(data)
    }
    );
});

module.exports = router;