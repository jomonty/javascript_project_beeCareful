# Beehive Management App - beeCareful

<br>

## The Brief
This was a group project at [CodeClan](https://www.codeclan.com). Our brief was to build a full-stack app with React, Express and MongoDB with the following aims:
 - Gain experience working in a team with other developers - to understand some of the challenges this creates and ways to overcome them
 - to have the opportunity to use Agile working methods
 - To become more confident using Git/GitHub for a multi person project
 - To consolidate learning from the JavaScript module
 
One of our group members is a beekeeper, so we decided to make an app to track apiaries, colonies and log inspections.

Collaborators:
- [mwmarszalek](https://github.com/mwmarszalek)
- [saladinzero](https://github.com/saladinzero)
- [larrywongkahei](https://github.com/larrywongkahei)
- [jomonty](https://github.com/jomonty)

## MVP
A local beekeeper has asked you to help them manage their apiary. They would like to be able to add, edit and remove colonies from the apiary and add, edit and remove inspections to each colony. They have also said that they would like to see upcoming weather to help them decide if they should plan an inspection.

A user should be able to:

- View all colonies, create, edit and delete new colonies
- Click on a colony to view more detail, and see all the related inspections as well as create, edit and delete inspections

## Extensions

- Have a way to dynamically display information on the colony item based on the most recent inspection data
- Implement an API call to a source of weather data to show upcoming weather for the colonies

### Advanced Extensions

- Implement the capability to have multiple apiaries

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


