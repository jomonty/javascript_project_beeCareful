const { MongoClient } = require('mongodb');
const { apiariesSeed, coloniesSeed, inspectionsSeed } = require('./data');

const uri = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the db
    await client.connect();
    const db = client.db('beehive_management');


    // Clear apiaries collection
    const apiaries = db.collection('apiaries');
    await apiaries.deleteMany();
    // Insert apiaires and fetch the collection
    await apiaries.insertMany(apiariesSeed);
    const insertedApiaries = await apiaries.find().toArray();
    

    // Clear colonies collection
    const colonies = db.collection('colonies');
    await colonies.deleteMany({});
    // Assign ObjectID for selected apiaryName in coloniesSeed
    const coloniesWithIDs = coloniesSeed.map(colony => {
      const selectedApiary = insertedApiaries.filter(apiary => {
        return apiary.name === colony.apiaryName;
      })
      colony.apiary_id = selectedApiary[0]._id;
      delete colony.apiaryName;
      return colony;
    })
    // Insert colonies and fetch the collection
    await colonies.insertMany(coloniesWithIDs);
    const insertedColonies = await colonies.find().toArray();


    // Clear inspections collection
    const inspections = db.collection('inspections');
    await inspections.deleteMany();

    // Assign ObjectID for selected colonyName in inspectionsSeed
    const inspectionsWithIDs = inspectionsSeed.map(inspection => {
      const selectedColony = insertedColonies.filter(colony => {
        return colony.name === inspection.colonyName;
      })
      inspection.colony_id = selectedColony[0]._id;
      delete inspection.colonyName;
      return inspection;
    })
    // Insert inspections and fetch the collection
    await inspections.insertMany(inspectionsWithIDs);
    const insertedInspections = await inspections.find().toArray();

    // console.log(insertedInspections)

  } finally {
    await client.close()
  }
}

run().catch(console.dir);
