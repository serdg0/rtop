const MIXOLOGY = 'MIXOLOGY';
const FOOD = 'FOOD';
const WINE = 'WINE';
const DESSERT = 'DESSERT';
const DISPLAY = 'DISPLAY';

const mixReducer = (state = {}, action) => {
    switch (action.type) {
        case MIXOLOGY:
            return action.mix;
        default:
            return state;
    }
}

const foodReducer = (state = {}, action) => {
    switch (action.type) {
        case FOOD:
            return action.food;
        default:
            return state;
    }
}

const wineReducer = (state = {}, action) => {
    switch (action.type) {
        case WINE:
            return action.wine;
        default:
            return state;
    }
}

const dessertReducer = (state = {}, action) => {
    switch (action.type) {
        case DESSERT:
            return action.dessert;
        default:
            return state;
    }
}

const displayReducer = (state = 'mixology', action) => {
    switch (action.type) {
        case DISPLAY:
            return action.display;
        default:
            return state;
    }
}

export {mixReducer, foodReducer, wineReducer, dessertReducer, displayReducer};