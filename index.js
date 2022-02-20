function findMatching(array, name) {
    let check = array.filter(ele => ele.toLowerCase() === name.toLowerCase())
    
    return check
  }

  function fuzzyMatch(array, letters) {
    let check = array.filter(ele => ele[0] === letters[0])
    
    return check
  }


  function matchName(array, name) {
    let check = array.filter(ele => ele.name === name)
      console.log(check)
      return check
    }



