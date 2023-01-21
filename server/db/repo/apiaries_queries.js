
async function getApiaries (db, id=null) {

  const query = id === null ? {} : { _id: id };

  // Assign collections
  const apiariesCollection = db.collection('apiaries');
  const coloniesCollection = db.collection('colonies');
  const inspectionsCollection = db.collection('inspections');
  const apiaries = await apiariesCollection.find(query).toArray();
  const colonies = await coloniesCollection.find().toArray();
  const inspections = await inspectionsCollection.find().toArray();

  // Find colonies related to apiaries
  const allApiaries = apiaries.map(apiary => {
    const relatedColonies = colonies
    .filter(colony => {
      return colony.parent_id.toString() === apiary._id.toString();
    })
    // Find inspections related to colonies
    .map(colony => {
      const relatedInspections = inspections
      .filter(inspection => {
        return inspection.parent_id.toString() === colony._id.toString();
      })
      // Assign related inspections to colonies
      colony.inspections = relatedInspections;
      return colony;
    })
    // Assign related colonies to apiaries
    apiary.colonies = relatedColonies;
    return apiary;
  })

  if (id !== null && allApiaries.length === 1) {
    return allApiaries[0];
  } else {
    return allApiaries;
  }
};


async function createApiary (db, apiary) {

  // Assign collection
  const apiariesCollection = db.collection('apiaries');
  // Insert new apiary
  const insertResult = await apiariesCollection.insertOne(apiary);
  // Find inserted apiary
  const insertedId = insertResult.insertedId;
  const insertedApiary = await getApiaries(db, insertedId);

  // Assign empty array as property to new apiary - for client
  insertedApiary.colonies = [];
  
  return insertedApiary;
};

async function updateApiary (db, id, apiary) {

  // Assign collections
  const apiariesCollection = db.collection('apiaries');

  // Modify apiary for insertion
  const apiaryToUpdate = apiary;
  delete apiaryToUpdate._id;
  delete apiaryToUpdate.colonies;
  console.log(apiaryToUpdate);

  // Update apiary in collection
  await apiariesCollection.updateOne(
    { _id: id },
    { $set: apiaryToUpdate }
  )

  // Fetch updated apiary and return
  const updatedApiary = await getApiaries(db, id)
  return updatedApiary;
};

async function deleteApiary (db, id) {

  // Assign collections
  const apiariesCollection = db.collection('apiaries');
  const coloniesCollection = db.collection('colonies');
  const inspectionsCollection = db.collection('inspections');
  const colonies = await coloniesCollection.find().toArray();

  // Cascade delete to child documents
  const relatedColonyIds = colonies
  .filter(colony => colony.parent_id.toString() === id.toString())
  .map(colony => colony._id)

  inspectionsCollection.deleteMany({parent_id: {$in: relatedColonyIds}})
  coloniesCollection.deleteMany({parent_id: id})
  apiariesCollection.deleteMany({ _id: id })
};

module.exports = {
  getApiaries,
  createApiary,
  updateApiary,
  deleteApiary
};