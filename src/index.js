const timeToMasterJS = 800;
const timeToBasicProgramming = 500;

/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 }
) {
  const hoursToMaster = knowsProgramming
    ? timeToMasterJS
    : timeToBasicProgramming + timeToMasterJS;

  return Math.ceil(hoursToMaster / config[focus]);
};
