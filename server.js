const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const port = process.env.PORT;
const mode = process.env.MODE;

if(mode === 'development'){
    morgan('dev');
}

app.listen(port, () => {
   console.log(`app listening on port ${port} in ${mode} mode`);
});
