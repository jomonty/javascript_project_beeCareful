use Farm;
db.dropDatabase();

db.beehives.insertMany([
    {
    "_id": "1",
    "colonyName": "Colony 1",
    "queenName": "Brenda",
    "queenBirthMonth": "2022-01-01",
    "inspections": [
    {
        "id": "aaaa",
        "hive_id": "1",
        "inspectionDate": "2021-05-12",
        "queenSpotted": false,
        "broodSpotted": "no",
        "honeyStores_kg": "0",
        "hiveHealth": "poor",
        "comments": "None"
    },
    {
    "id": "aaab",
    "hive_id": "1",
    "inspectionDate": "2021-12-12",
    "queenSpotted": true,
    "broodSpotted": "no",
    "honeyStores_kg": "5",
    "hiveHealth": "ok",
    "comments": "None"
    },
    {
    "id": "aaac",
    "hive_id": "1",
    "inspectionDate": "2022-05-12",
    "queenSpotted": true,
    "broodSpotted": "no",
    "honeyStores_kg": "10",
    "hiveHealth": "good",
    "comments": "None"
    }
    ]
},
{
    "_id": "2",
    "colonyName": "Colony 2",
    "queenName": "Liz",
    "queenBirthMonth": "2022-06-01",
    "inspections": [
    {
        "id": "aaad",
        "hive_id": "2",
        "inspectionDate": "2021-05-12",
        "queenSpotted": false,
        "broodSpotted": "no",
        "honeyStores_kg": "0",
        "hiveHealth": "poor",
        "comments": "None"
    },
    {
        "id": "aaae",
        "hive_id": "2",
        "inspectionDate": "2021-12-12",
        "queenSpotted": true,
        "broodSpotted": "no",
        "honeyStores_kg": "5",
        "hiveHealth": "ok",
        "comments": "None"
    },
    {
        "id": "aaaf",
        "hive_id": "2",
        "inspectionDate": "2022-05-12",
        "queenSpotted": true,
        "broodSpotted": "no",
        "honeyStores_kg": "10",
        "hiveHealth": "good",
        "comments": "None"
    }
    ]
}
])