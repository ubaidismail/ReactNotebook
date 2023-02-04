
const connectToMango = require('./db');
const express = require('express');
connectToMango();
const app = express();
const port = 6000;

app.use(express.json()); // it's a middle were for get rid of undefined error in response

// Available ROutes

app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})