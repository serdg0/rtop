const MIXOLOGY = 'MIXOLOGY';
const FOOD = 'FOOD';
const WINE = 'WINE';
const DESSERT = 'DESSERT';
const DISPLAY = 'DISPLAY';

const populateMixology = obj => {
    return {
        type: MIXOLOGY,
        mix: obj
    }
}

const populateFood = obj => {
    return {
        type: FOOD,
        food: obj
    }
}

const populateWine = obj => {
    return {
        type: WINE,
        wine: obj
    }
}

const populateDessert = obj => {
    return {
        type: DESSERT,
        dessert: obj
    }
}

const displayAction = name => {
    return {
        type: DISPLAY,
        display: name
    }
}

export {populateMixology, populateFood, populateWine, populateDessert, displayAction};