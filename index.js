const express = require('express');
const { connection } = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Init connection with postgres
connection();

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})