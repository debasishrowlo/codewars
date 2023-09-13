type matrix = number[][];
export function matrixAddition(a: matrix, b: matrix): matrix {
  const size = a.length
  let result:matrix = []
  
  for (let y = 0; y < size; y++) {
    result[y] = []
    for (let x = 0; x < size; x++) {
      result[y][x] = a[y][x] + b[y][x]
    }
  }
  
  return result;
}
