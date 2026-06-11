require("datejs");

function combineUsers(...args) {
  const combinedObjest = {
    users: [],
  };

  for (array of args) {
    combinedObjest.users = [...combinedObjest.users, ...array];
  }

  combinedObjest.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObjest;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
