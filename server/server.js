const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const createRouter = require('./helpers/create_router');

const app = express();

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const router = createRouter(db)
    app.use('/api', router)
  })
  .catch(error => {
    console.error(error);
  })

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});