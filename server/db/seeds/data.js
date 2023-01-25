
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
    name: "West Ckeya",
    queenName: "Brenda",
    queenBirthMonth: "2022-01-01",
    apiaryName: "Andrew's Apiary"
  },
  {
    parent_id: null,
    name: "Stallmoorfa",
    queenName: "Liz",
    queenBirthMonth: "2021-12-01",
    apiaryName: "Andrew's Apiary"
  },
  {
    parent_id: null,
    name: "Spa",
    queenName: "Pippa",
    queenBirthMonth: "2021-11-01",
    apiaryName: "Andrew's Apiary"
  },
  {
    parent_id: null,
    name: "Maliha",
    queenName: "Liz",
    queenBirthMonth: "2021-10-01",
    apiaryName: "Michael's Apiary"
  },
  {
    parent_id: null,
    name: "Warkdearnefra",
    queenName: "Thomas",
    queenBirthMonth: "2021-09-01",
    apiaryName: "Michael's Apiary"
  },
  {
    parent_id: null,
    name: "St Coulspea",
    queenName: "Noor",
    queenBirthMonth: "2021-08-01",
    apiaryName: "Michael's Apiary"
  },
  {
    parent_id: null,
    name: "New Bla",
    queenName: "Lois",
    queenBirthMonth: "2021-07-01",
    apiaryName: "Larry's Apiary"
  },
  {
    parent_id: null,
    name: "Chorha",
    queenName: "Elmer",
    queenBirthMonth: "2021-06-01",
    apiaryName: "Larry's Apiary"
  },
  {
    parent_id: null,
    name: "Stockslea",
    queenName: "Lillie",
    queenBirthMonth: "2021-05-01",
    apiaryName: "Larry's Apiary"
  },
  {
    parent_id: null,
    name: "Bridbrightnca",
    queenName: "Ruth",
    queenBirthMonth: "2021-04-01",
    apiaryName: "Josh's Apiary"
  },
  {
    parent_id: null,
    name: "St Bla",
    queenName: "Neve",
    queenBirthMonth: "2021-03-01",
    apiaryName: "Josh's Apiary"
  },
  {
    parent_id: null,
    name: "Congbea",
    queenName: "Melanie",
    queenBirthMonth: "2021-02-01",
    apiaryName: "Josh's Apiary"
  }
];

const inspectionsSeed = [
  {
    parent_id: null,
    inspectionDate: "2021-05-12",
    queenSpotted: false,
    broodSpotted: "No",
    honeyStores_kg: "0",
    hiveHealth: "poor",
    comments: "None",
    colonyName: "West Ckeya"
  },
  {
    parent_id: null,
    inspectionDate: "2021-12-12",
    queenSpotted: true,
    broodSpotted: "No",
    honeyStores_kg: "5",
    hiveHealth: "ok",
    comments: "None",
    colonyName: "West Ckeya"
  },
  {
    parent_id: null,
    inspectionDate: "2022-05-12",
    queenSpotted: true,
    broodSpotted: "No",
    honeyStores_kg: "10",
    hiveHealth: "good",
    comments: "None",
    colonyName: "West Ckeya"
  },
  {
    parent_id: null,
    inspectionDate: "2021-05-12",
    queenSpotted: false,
    broodSpotted: "No",
    honeyStores_kg: "0",
    hiveHealth: "poor",
    comments: "None",
    colonyName: "Stallmoorfa"
  },
  {
    parent_id: null,
    inspectionDate: "2021-12-12",
    queenSpotted: true,
    broodSpotted: "No",
    honeyStores_kg: "5",
    hiveHealth: "ok",
    comments: "None",
    colonyName: "Stallmoorfa"
  },
  {
    parent_id: null,
    inspectionDate: "2022-05-12",
    queenSpotted: true,
    broodSpotted: "No",
    honeyStores_kg: "10",
    hiveHealth: "good",
    comments: "None",
    colonyName: "Stallmoorfa"
  }
];

module.exports = { apiariesSeed, coloniesSeed, inspectionsSeed };