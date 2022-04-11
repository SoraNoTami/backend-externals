const axios = require("axios");
const express = require('express');
const app = express();
const gameOfThrone = require('./routes/game-of-throne.js')
const pokemon = require('./routes/pokemon')
const port = 8000

app.get('/', (req, res) => {
    res.send('Externals API');
});

app.use("/game-of-throne", gameOfThrone);

app.use("/pokemon", pokemon);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

