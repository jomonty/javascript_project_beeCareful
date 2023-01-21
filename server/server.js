const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const createApiariesRouter = require('./routes/create_apiaries_router');

const app = express();

app.use(express.json());
app.use(cors());

const uri = "mongodb://127.0.0.1:27017";
const dbName = "beehive_management";

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db(dbName);
    const apiariesRouter = createApiariesRouter(db)
    app.use('/api/apiaries', apiariesRouter)
  })
  .catch(error => {
    console.error(error);
  })

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});