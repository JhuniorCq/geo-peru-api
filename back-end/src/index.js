const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {router} = require('./routes/routes.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});