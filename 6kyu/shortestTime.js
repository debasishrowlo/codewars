function shortestTime (speed) {
  speed.sort((a, b) => a - b)
  const [f1, f2, f3, f4] = speed
  
  const f1Method = 2 * f1 + f2 + f3 + f4
  const f1f2Method = f1 + 3 * f2 + f4
  
  return Math.min(f1Method, f1f2Method)
}
