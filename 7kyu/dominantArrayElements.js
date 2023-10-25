function solve(arr) {
  const dominant = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).every(num => arr[i] > num)) {
      dominant.push(arr[i])
    }
  }
  
  return dominant
}
