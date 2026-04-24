const express = require('express');

const app = express();
const port = 8001;

app.listen(port, () => {
  console.log(`JS server listening on port ${port}`);
});