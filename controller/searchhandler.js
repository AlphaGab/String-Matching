const searchHandler = function search(combinations,searchValue){
    const searchResult = []
    const searchLenght = searchValue.length
    for(let i = 0 ; i < combinations.length ; i ++){
        if(searchValue == combinations[i].value){
            queryIndex = combinations[i].index
            const range = (searchLenght-1) + queryIndex
            searchResult.push(queryIndex)
            if(queryIndex != range) searchResult.push(range)
            
        }
    }
    return searchResult
  }

  module.exports = searchHandler

