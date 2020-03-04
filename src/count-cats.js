module.exports = function countCats(array) {
  var count = 0;
  
  for (let i = 0; i < array.length; i++) {
    array[i].forEach(element => {
      if (element === "^^") {
        count += 1;
      } 
    });
  }
  
  return count;
};
  