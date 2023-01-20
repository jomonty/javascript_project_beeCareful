
const apiariesSeed = [
  {
    name: "Andrew's Apiary",
    address: "123 Andrew's House"
  },
  {
    name: "Michael's Apiary",
    address: "123 Michael's House"
  },
  {
    name: "Larry's Apiary",
    address: "123 Larry's House"
  },
  {
    name: "Josh's Apiary",
    address: "123 Josh's House"
  }
];

const coloniesSeed = [
  {
    parent_id: null,
    name: "Colony 1",
    queenName: "Brenda",
    queenBirthMonth: "2022-01-01",
    apiaryName: "Andrew's Apiary"
  },
  {
    parent_id: null,
    name: "Colony 2",
    queenName: "Liz",
    queenBirthMonth: "2022-06-01",
    apiaryName: "Andrew's Apiary"
  }
];

const inspectionsSeed = [
  {
    parent_id: null,
    inspectionDate: "2021-05-12",
    queenSpotted: false,
    broodspotted: "no",
    honeyStores_kg: "0",
    hiveHealth: "poor",
    comments: "None",
    colonyName: "Colony 1"
  },
  {
    parent_id: null,
    inspectionDate: "2021-12-12",
    queenSpotted: true,
    broodspotted: "no",
    honeyStores_kg: "5",
    hiveHealth: "ok",
    comments: "None",
    colonyName: "Colony 1"
  },
  {
    parent_id: null,
    inspectionDate: "2022-05-12",
    queenSpotted: true,
    broodspotted: "no",
    honeyStores_kg: "10",
    hiveHealth: "good",
    comments: "None",
    colonyName: "Colony 1"
  },
  {
    parent_id: null,
    inspectionDate: "2021-05-12",
    queenSpotted: false,
    broodspotted: "no",
    honeyStores_kg: "0",
    hiveHealth: "poor",
    comments: "None",
    colonyName: "Colony 2"
  },
  {
    parent_id: null,
    inspectionDate: "2021-12-12",
    queenSpotted: true,
    broodspotted: "no",
    honeyStores_kg: "5",
    hiveHealth: "ok",
    comments: "None",
    colonyName: "Colony 2"
  },
  {
    parent_id: null,
    inspectionDate: "2022-05-12",
    queenSpotted: true,
    broodspotted: "no",
    honeyStores_kg: "10",
    hiveHealth: "good",
    comments: "None",
    colonyName: "Colony 2"
  }
];

module.exports = { apiariesSeed, coloniesSeed, inspectionsSeed };