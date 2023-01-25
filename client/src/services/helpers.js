
const Helpers = {

    findColony (singleApiary, col_id) {
        const colony = singleApiary.colonies
        .filter(colony => colony._id === col_id)
        .at(0);
        return colony;
    },

    findInspection (singleColony, ins_id) {
        const inspection = singleColony.inspections
        .filter(inspection => inspection._id === ins_id)
        .at(0);
        return inspection;
    },

    addColonyToState (singleApiary, colony) {
        const updatedApiary = singleApiary;
        updatedApiary.colonies.push(colony);
        return updatedApiary;
    },

    editColonyInState (singleApiary, colony) {
        // Find DB ID of colony to update
        const col_id = colony._id;
        // Find old colony with that ID from Apiary
        const oldColony = singleApiary.colonies
        .filter(colony => colony._id === col_id)
        .at(0);
        // Find index of old colony
        const index = singleApiary.colonies
        .indexOf(oldColony)

        // Create updated apiary, update colony at correct index and return
        const updatedApiary = singleApiary;
        updatedApiary.colonies[index] = colony;
        return updatedApiary;
    },

    deleteColonyFromState (singleApiary, colony) {
        const updatedApiary = singleApiary;
        // Find index of colony to delete
        const index = updatedApiary.colonies.indexOf(colony);
        // Delete requested colony from array
        updatedApiary.colonies.splice(index, 1);
        return updatedApiary;
    },

    addInspectionToState (singleApiary, inspection) {
        // Get IDs and objects
        const updatedApiary = singleApiary;
        const col_id = inspection.parent_id;
        // Find colony
        const colony = updatedApiary.colonies
        .filter(colony => colony._id === col_id)
        .at(0);
        const col_index = updatedApiary.colonies
        .indexOf(colony);

        // Add Inspection to relevant colony array.
        updatedApiary.colonies[col_index].inspections.push(inspection);
        return updatedApiary;
    },

    updateInspectionInState (singleApiary, inspection) {
        // Get IDs and objects
        const updatedApiary = singleApiary;
        const col_id = inspection.parent_id;
        const ins_id = inspection._id;
        // Find colony
        const colony = updatedApiary.colonies
        .filter(colony => colony._id === col_id)
        .at(0);
        const col_index = updatedApiary.colonies
        .indexOf(colony);

        // Find Inspection
        const oldInspection = colony.inspections
        .filter(inspection => inspection._id === ins_id)
        .at(0);
        const oldInsIndex = colony.inspections
        .indexOf(oldInspection);

        //Update Inspection at index
        updatedApiary.colonies[col_index].inspections[oldInsIndex] = inspection;

        return updatedApiary;
    },

    deleteInspectionFromState (singleApiary, inspection) {
        // Get IDs and objects
        const updatedApiary = singleApiary;
        const col_id = inspection.parent_id;

        // Find colony
        const colony = updatedApiary.colonies
        .filter(colony => colony._id === col_id)
        .at(0);
        const col_index = updatedApiary.colonies
        .indexOf(colony);

        // Find inspection index
        const inspectionIndex = colony.inspections
        .indexOf(inspection);

        // Remove required inspection
        updatedApiary.colonies[col_index].inspections
        .splice(inspectionIndex, 1);

        return updatedApiary;
    }
}

module.exports = Helpers;