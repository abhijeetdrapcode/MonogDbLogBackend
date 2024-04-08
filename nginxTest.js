const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001; 

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('http://localhost/api');
    // const response = await axios.get('http://192.168.68.104:3000/api');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Cannot fetch data from the api', error);
    res.status(500).json({ error: 'API RATE LIMIT HAS REACHED' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
