/* Boat will have many fish
Each fish represented by Object
Fish properties: 
-Species
-Weight
-Price (Ranges from $3.00 - $10.00 per fish)
-Amount (how many of this species were caught today)
*/

const boatInventory = (obj, id) => {
    const fishData = [
        { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
        { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
        { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
        { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
        { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
        { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
        { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
        { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
    ]

    if (obj) {
        fishData.push(obj);
    }
    if (typeof obj !== Object) {
        id = obj;
    }
    
    if (id) {
        for (const fish of fishData) {
            if (fish.id === id) {
                return fish;
            } else if (fish.id !== id && fishData.length - 1 === fishData.indexOf(fish)) {
                return `That id does not match any current fish.`
            }
        }
    }
    return fishData;
    }

module.exports = { boatInventory };

