const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const corsOption = {
  origin: 'http://localhost:8089',
  credential: true,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test working
app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

const PORT = 8088;
app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});

const db = require('./app/models');
db.connex.sync();

require('./app/routes/packages.route')(app);
