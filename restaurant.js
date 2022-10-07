const { mongerInventory } = require("./fishMonger.js");
const { boatInventory } = require("./fishingBoat.js")
const fishMenu = (inventory, maxPrice) => {
let fishInHTML;
let tempArray = [];

if (!inventory) {
    return "You must define an inventory."
}

switch(maxPrice) {
    case undefined:
        return "You must define a max price.";
        break;
    case typeof maxPrice !== "number":
        return "maxPrice must be a number.";
        break;
    default:
        for (const fish of inventory) {
            if (fish.price < maxPrice) {
                fish.price = Math.floor((fish.price / 2))
                tempArray.push(fish);
                break;
            }
        }
} 
const cheapestFish = (inv) => {
    
    let fishNum = [];
    for (const fish in inv) {
        fishNum.push[fish.price]
    }

    return inv[Math.min(fishNum)]
}
const fish = cheapestFish(tempArray);
return `<h1>Menu</h1>\n<article class="menu">\n    <h2>${fish.species}</h2>\n    <section class="menu__item">${fish.species} Soup</section>\n    <section class="menu__item">${fish.species} Sandwich</section>\n    <section class="menu__item">Grilled ${fish.species}</section>\n</article>`;

}

/*
-Chef specifies max price, buys 50% if price is less or equal
-Chef creates 3 meals per fish -- soup, grilled dinner, sandwich
(Tuna Soup, Tuna Sandwich, Grilled Tuna)

<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/

//Use for each to iterate through mongerInventory
//Parameter for max price & inventory
module.exports = { fishMenu };

