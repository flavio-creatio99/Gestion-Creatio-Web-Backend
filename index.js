const express = require('express');
const { connection } = require('./db/connection');
const cors = require('cors');
const { associations } = require('./db/associations');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Init connection with postgres
connection();
// Generate associations for use inner joins
associations();

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})