const  BeeServices = require("../src/services/BeeService")
const { useState, useEffect } = require('react');

const [outcome, setOutcome] = useState([])

const new12 = [1, 2]
setOutcome(new12)

console.log(outcome)