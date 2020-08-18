const MIXOLOGY = 'MIXOLOGY';
const FOOD = 'FOOD';
const WINE = 'WINE';
const DESSERT = 'DESSERT';
const DISPLAY = 'DISPLAY';

const populateMixology = obj => ({
  type: MIXOLOGY,
  mix: obj,
});

const populateFood = obj => ({
  type: FOOD,
  food: obj,
});

const populateWine = obj => ({
  type: WINE,
  wine: obj,
});

const populateDessert = obj => ({
  type: DESSERT,
  dessert: obj,
});

const displayAction = name => ({
  type: DISPLAY,
  display: name,
});

export {
  populateMixology, populateFood, populateWine, populateDessert, displayAction,
};
