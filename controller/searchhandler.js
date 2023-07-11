const searchHandler = function search(combinations,searchValue){
    const searchResult = []
    const searchLenght = searchValue.length
    for(let i = 0 ; i < combinations.length ; i++){
        if(searchValue == combinations[i].value){
           let queryIndex = combinations[i].starts
            const range = (searchLenght-1) + queryIndex
            console.log(range)
            console.log(queryIndex)
            searchResult.push(queryIndex)
            if(queryIndex != range) searchResult.push(range)
            
        }
    }
    return searchResult
  }

  module.exports = searchHandler

