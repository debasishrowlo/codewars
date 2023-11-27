function revrot(str, size) {
  if (
    str === "" || 
    size <= 0 ||
    size > str.length 
  ) { 
    return ""
  }

  const chunks = []

  let chunk = ""
  for (let i = 0; i < str.length; i++) {
    chunk += str[i]
    if (chunk.length === size) {
      chunks.push(chunk)
      chunk = ""
    }
  }

  return chunks.map(chunk => {
    const cubeSum = chunk.split("").reduce((acc, char) => {
      return acc + Math.pow(parseInt(char), 3)
    }, 0)

    if (cubeSum % 2 === 0) {
      return chunk.split("").reverse().join("")
    } else {
      return chunk.slice(1) + chunk[0]
    }
  }).join("")
}
