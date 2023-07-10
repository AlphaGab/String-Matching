const showAll = (req,res)=>{
    string = req.body.value 
    combination = findAllConsecutiveCombinationsWithIndex(string)
    return combination
}


function findAllConsecutiveCombinationsWithIndex(text) {
    const combinations = [];
    const textLength = text.length;
  
    for (let windowSize = 1; windowSize <= textLength; windowSize++) {
      for (let startIndex = 0; startIndex <= textLength - windowSize; startIndex++) {
        const val = text.slice(startIndex, startIndex + windowSize)
        const combination = {
          value:val,
          starts: startIndex,
          ends: (val.length-1)+startIndex
        };
        combinations.push(combination);
      }
    }
  
    return combinations;
  }
  

  module.exports = showAll