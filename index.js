const express = require('express');

const app = express();
const port = 3001;

app.get('/health', (req, res) => {
  res.json({ data: 'ok' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
