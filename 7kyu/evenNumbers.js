function evenNumbers(array, number) {
  let result = []
  
  for (let i = array.length; i >= 0; i--) {
    const num = array[i]
    
    if (num % 2 === 0) {
      result = [num, ...result]
    }
    
    if (result.length === number) {
      break
    }
  }
  
  return result
}
