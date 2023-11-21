function findEvenIndex(arr)
{
  let sumLeft = 0
  let sumRight = arr.reduce((acc, cur) => acc + cur, 0)

  for (let i = 0; i < arr.length; i++) {
    sumRight = sumRight - arr[i]

    if (sumLeft === sumRight) {
      return i
    }

    sumLeft += arr[i]
  }
  
  return -1
}
