const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = (inventory, maxPrice) => {
    const inv = [];
    if (!maxPrice) {
        for (const fish of inventory) {
            if (fish.price <=7.50 && fish.amount >= 10) {
                fish.amount = 10;
                inv.push(fish);
            }
        }
    } else {
        for (const fish of inventory) {
            if (fish.price <=7.50 && fish.price <= maxPrice && fish.amount >= 10) {
                fish.amount = 10;
                inv.push(fish);
            }
        }
    }

    return inv;


    /* Each day the fisher buys 10 inexpensive fish caught by the boat
    If quantity is less than $10, the fish monger does not buy it
    Does not buy fish higher than 7.50 per fish
    Chef can specify a max budget per fish
    Each fish object provided by the fish monger sohuld have a quantity of 10 instead of the original quantity from the fishing boat*/

}


module.exports = { mongerInventory };
