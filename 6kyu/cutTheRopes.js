function cutTheRopes(a) {
  let ropesLeft = []
  
  while(a.length > 0) {
    ropesLeft.push(a.length)
    
    const min = Math.min(...a)
    a = a.map(num => num - min).filter(num => num > 0)
  }
  
  return ropesLeft
}
