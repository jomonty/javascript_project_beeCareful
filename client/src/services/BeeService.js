const baseURL = "http://localhost:9000/api/apiaries/"
const BeeServices = {
    // Get Apiaries
    getApiaries() {
        return fetch(baseURL)
        .then(res => res.json());
  },

//   POST Apiaries
    addApiaries(apiaries) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(apiaries),
            headers: {
            'Content-Type': 'application/json'
            }
      })
            .then(res => res.json());
  },
//   POST Colonies
    addColonies (apiaries_id, colony){
        return fetch(baseURL + apiaries_id +"/colonies", {
            method: 'POST',
            body: JSON.stringify(colony),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
},
// POST Inspection
    addInspection (apiaries_id, colony_id, inspection) {
        return fetch(baseURL + apiaries_id + "/colonies/" + colony_id + "/inspections",{
            method:'POST',
            body: JSON.stringify(inspection),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
},
// PUT Inspection
    updateInspection (apiaries_id, colony_id, inspection) {
        return fetch(baseURL + apiaries_id + "/colonies/" + colony_id + "/inspections/"+ inspection._id,{
            method:'POST',
            body: JSON.stringify(inspection),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
},
// PUT Apiaries
    updateApiaries(apiaries, apiaries_id) {
        return fetch(baseURL + apiaries_id, {
            method: 'PUT',
            body: JSON.stringify(apiaries)
        })
        .then(res => res.json());
    },
// PUT Colonies
    updateColonies (apiaries_id, colony_id, colony){
    return fetch(baseURL + apiaries_id + "/colonies/" + colony_id,{
        method: 'PUT',
        body: JSON.stringify(colony),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
},
// DELETE Apiaries
  deleteApiaries(id) {
      return fetch(baseURL + id, {
          method: 'DELETE'
      });
  },
// DELETE Colonies
  deleteColonies (apiaries_id, colony_id){
      return fetch(baseURL + apiaries_id + "/colonies/" + colony_id, {
          method: 'DELETE'
      })
  },
// DELETE Inspection
  deleteInspection(apiaries_id, colony_id, inspection_id){
      return fetch(baseURL + apiaries_id + "/colonies/" + colony_id + "/inspections/" + inspection_id,{
          method:'DELETE'
      })
  }
};
module.exports = BeeServices;