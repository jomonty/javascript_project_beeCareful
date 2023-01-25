# Beehive Management App - beeCareful

<br>

## The Brief

A local beekeeper has asked you to help them manage their apiary. They would like to be able to add, edit and remove colonies from the apiary and add, edit and remove inspections to each colony. They have also said that they would like to see upcoming weather to help them decide if they should plan an inspection.

### MVP

A user should be able to:

- view all colonies, create, edit and delete new colonies
- click on a colony to view more detail, and see all the related inspections as well as create, edit and delete inspections

### Extensions

- have a way to dynamically display information on the colony item based on the most recent inspection data
- implement an API call to a source of weather data to show upcoming weather for the colonies

### Advanced Extensions

- implement the capability to have multiple apiaries

<br>

## To Run

### Requirements
MongoDB installed locally.

### Instructions
Clone the repo.

#### Server
Navigate to server folder in terminal
```
cd server
```
Install all dependencies
```
npm install
```
Run the DB seeds
```
npm run seeds
```
Start the server in dev mode
```
npm run server:dev
```

#### Client
Navigate to the client folder in terminal
```
cd client
```
Install all dependencies
```
npm install
```
Start the app
```
npm start
```
The app will run locally on localhost:3000 by default.


