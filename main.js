const { fishMenu } = require("./restaurant.js")
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")


const menu = fishMenu(mongerInventory(boatInventory()), 5.00);
console.log(menu);
