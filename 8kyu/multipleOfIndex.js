function multipleOfIndex(array) {
  return array.filter((num, i) => {
    if (i === 0 && num === 0) {
      return true
    }
    
    return num % i === 0
  })
}
