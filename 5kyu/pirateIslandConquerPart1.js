const conquerIsland = (map) => {
  const numRows = 8
  const numCols = 8

  const maxDistance = numRows + numCols

  let uIslands = []
  let nearestUIsland = maxDistance
  let mIslands = []
  let nearestMIsland = maxDistance

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cell = map[row][col]

      if (cell === "u" || cell === "m") {
        const distance = row + col

        if (cell === "u") {
          if (distance < nearestUIsland) {
            nearestUIsland = distance
            uIslands = [[row, col]]
          } else if (distance === nearestUIsland) {
            uIslands.push([row, col])
          }
        } else if (cell === "m") {
          if (distance < nearestMIsland) {
            nearestMIsland = distance
            mIslands = [[row, col]]
          } else if (distance === nearestUIsland) {
            mIslands.push([row, col])
          }
        }
      }
    }
  }

  return uIslands.length > 0 ? uIslands : mIslands
}
