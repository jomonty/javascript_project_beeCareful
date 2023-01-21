const e = require("express");

async function getColonies (db, parent_id=null, id=null) {

  let query = {};
  if (id === null) {
    query = { parent_id: parent_id }
  } else {
    query = { _id: id, parent_id: parent_id}
  }

  // Assign collections
  const coloniesCollection = db.collection('colonies');
  const inspectionsCollection = db.collection('inspections');
  const colonies = await coloniesCollection.find(query).toArray();
  const inspections = await inspectionsCollection.find().toArray();

  // Find inspections related to colonies
  const allColonies = colonies.map(colony => {
    const relatedInspections = inspections
      .filter(inspection => {
        return inspection.parent_id.toString() === colony._id.toString();
      })
    colony.inspections = relatedInspections;
    return colony;        
  })

  if ( id !== null && allColonies.length === 1) {
    return allColonies[0];
  } else {
    return allColonies;
  }
};
  
async function createColony (db, parent_id, colony) {

  // Assign collection
  const coloniesCollection = db.collection('colonies');
  // Add parent_id to colony
  const colonyToInsert = colony;
  colonyToInsert.parent_id = parent_id;
  // Insert new colony
  const insertResult = await coloniesCollection.insertOne(colonyToInsert);
  // Find inserted colony
  const insertedId = insertResult.insertedId;
  const insertedColony = await getColonies(db, parent_id, insertedId);

  // Assign empty array as property to new apiary - for client
  insertedColony.inspections = [];
  
  return insertedColony;
};
  
async function updateColony (db, parent_id, id, colony) {

  // Assign collections
  const coloniesCollection = db.collection('colonies');

  // Modify apiary for insertion
  const colonyToUpdate = colony;
  colonyToUpdate.parent_id = parent_id;
  delete colonyToUpdate._id;
  delete colonyToUpdate.inspections;

  // Update apiary in collection
  await coloniesCollection.updateOne(
    { _id: id },
    { $set: colonyToUpdate }
  )

  // Fetch updated apiary and return
  const updatedColony = await getColonies(db, parent_id, id);

  return updatedColony;
};
  
async function deleteColony (db, id) {

  // Assign collections
  const coloniesCollection = db.collection('colonies');
  const inspectionsCollection = db.collection('inspections');
  const inspections = await inspectionsCollection.find({ parent_id: id }).toArray();

  // Cascade delete to child documents
  const relatedInspectionsIds = inspections
    .map(colony => colony._id)

  inspectionsCollection.deleteMany({ _id: {$in: relatedInspectionsIds}})
  coloniesCollection.deleteMany({ _id: id})
};

module.exports = {
    getColonies,
    createColony,
    updateColony,
    deleteColony
};