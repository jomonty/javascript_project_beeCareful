const baseURL = "http://localhost:9000/api/apiaries/"
const BeeServices = {
  getApiaries() {
      return fetch(baseURL)
      .then(res => res.json());
  },
  addApiaries(apiaries) {
      return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(apiaries)
      })
      .then(res => res.json());
  },
  updateApiaries(apiaries, apiaries_id) {
      return fetch(baseURL + apiaries_id, {
          method: 'PUT',
          body: JSON.stringify(apiaries)
      })
      .then(res => res.json());
  },
  deleteApiaries(id) {
      return fetch(baseURL + id, {
          method: 'DELETE'
      });
  },
  addColonies (apiaries_id, colony){
      return fetch(baseURL + apiaries_id +"/colonies", {
        method: 'POST',
        body: JSON.stringify(colony)
      })
      .then(res => res.json());
  },
  updateColonies (apiaries_id, colony_id, colony){
      return fetch(baseURL + apiaries_id + "colonies" + colony_id,{
          method: 'PUT',
          body: JSON.stringify(colony)
      })
      .then(res => res.json());
  },
  deleteColonies (apiaries_id, colony_id){
      return fetch(baseURL + apiaries_id + "colonies" + colony_id, {
          method: 'DELETE'
      })
  },
  addInspection (apiaries_id, colony_id, inspection_id, inspection) {
      return fetch(baseURL + apiaries_id + "colonies" + colony_id + "inspections" + inspection_id,{
          method:'POST',
          body: JSON.stringify(inspection)
      }
      .then(res => res.json()))
  },
  deleteInspection(apiaries_id, colony_id, inspection_id){
      return fetch(baseURL + apiaries_id + "colonies" + colony_id + "inspections" + inspection_id,{
          method:'DELETE'
      })
  }
};
module.exports = BeeServices;