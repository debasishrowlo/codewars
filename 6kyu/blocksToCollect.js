function blocksToCollect(level) {
  const blocks = {
    gold: 0,
    diamond: 0,
    emerald: 0,
    iron: 0,
  }
  const blockTypes = Object.keys(blocks)
  
  let total = 0
  for (let i = 0; i < level; i++) {
    const blockCount = Math.pow(i * 2 + 3, 2)
    blocks[blockTypes[i % 4]] += blockCount
    total += blockCount
  }
  
  return {
    total,
    ...blocks,
  }
}
