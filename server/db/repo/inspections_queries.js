
async function getInspections (db, col_id, ins_id=null) {

    let query = {parent_id: col_id}
    if (ins_id !== null) {
        query = { _id: ins_id, parent_id: col_id }
    }
    // Assign collection
    const inspectionsCollection = db.collection('inspections');
    const inspections = await inspectionsCollection.find(query).toArray();

    if ( ins_id !== null && inspections.length === 1 ) {
        return inspections[0];
    } else {
        return inspections;
    }
};
  
async function createInspection (db, col_id, inspection) {

    // Assign collection
    const inspectionsCollection = db.collection('inspections');

    // Modify inspection
    const inspectionToInsert = inspection;
    inspection.parent_id = col_id;
    // Insert new inspection
    const insertResult = await inspectionsCollection.insertOne(inspectionToInsert)
    // Fetch inserted inspection
    const insertedId = insertResult.insertedId;
    const insertedInspection = await getInspections(db, col_id, insertedId);

    return insertedInspection;
};
  
async function updateInspection (db, col_id, ins_id, inspection) {

    // Assign collection
    const inspectionsCollection = db.collection('inspections');

    // Modify inspection for insertion
    const inspectionToUpdate = inspection;
    inspectionToUpdate.parent_id = col_id;
    delete inspectionToUpdate._id;

    // Update inspection in collection
    await inspectionsCollection.updateOne(
        { _id: ins_id },
        { $set: inspectionToUpdate }
    )

    // Fetch updated inspection and return
    const updatedInspection = await getInspections(db, col_id, ins_id);
    return updatedInspection;
};
  
async function deleteInspection (db, ins_id) {

    // Assign collection
    const inspectionsCollection = db.collection('inspections');

    // Delete inspection
    inspectionsCollection.deleteMany({ _id: ins_id })
};

module.exports = {
    getInspections,
    createInspection,
    updateInspection,
    deleteInspection
};