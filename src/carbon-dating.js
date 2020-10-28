const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(parseFloat(sampleActivity))) {
    return false;
  } else {
    return  Math.ceil((parseFloat(sampleActivity)/MODERN_ACTIVITY)/(0.693/HALF_LIFE_PERIOD)) ;
  }
};
