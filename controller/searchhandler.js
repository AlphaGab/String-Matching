const searchHandler = function search(combinations,searchValue){
    const searchResult = []
    for(let i = 0 ; i < combinations.length ; i ++){
        if(searchValue == combinations[i].value){
            searchResult.push(combinations[i].index)
        }
    }
    return searchResult
  }

  module.exports = searchHandler

