export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false
  
  let x = 0
  let y = 0
  
  walk.forEach(direction => {
    if (direction === "n") {
      y += 1  
    } else if (direction === "s") {
      y -= 1
    } else if (direction === "e") {
      x += 1
    } else if (direction === "w") {
      x -= 1
    }
  })
  
  return x === 0 && y === 0
}
