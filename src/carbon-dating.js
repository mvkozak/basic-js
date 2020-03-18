const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var activityNum;
  if (typeof sampleActivity === 'string') {
    activityNum = parseFloat(sampleActivity);
  } else {
    return false;
  }
  if (activityNum > 0 && activityNum <= MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / activityNum) * HALF_LIFE_PERIOD / 0.693);
  } else {
    return false;
  }
};

