const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

const fileContent = fs.readFileSync('/var/log/mongodb/audit.json', 'utf8');

const jsonObjects = fileContent.split('\n')
  .filter(line => line.trim().length > 0)
  .map(line => JSON.parse(line));

app.get('/api', (req, res) => {
  res.json(jsonObjects);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
