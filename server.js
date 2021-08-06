const express = require('express');
const app = express();
const port = process.env.PORT

app.listen(port, () => {
    `app listening on port ${port}`;
});
