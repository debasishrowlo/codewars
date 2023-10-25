function simulateMining(path, time) {
  let result = []
  let workers = []
  
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "<") {
      workers.push({ pos: i, dir: "left" })
    }
    
    if (path[i] === ">") {
      workers.push({ pos: i, dir: "right" })
    }
  }
  
  for (let i = 0; i < time - 1; i++) {
    workers = workers.map(worker => {
      if (worker.dir === "left") {
        worker.pos--
        if (worker.pos === 0) {
          worker.dir = "right"
        }
      } else {
        worker.pos++
        if (worker.pos === path.length - 1) {
          worker.dir = "left"
        }
      }
      
      return worker
    })
    
    let newPath = ""
    
    for (let j = 0; j < path.length; j++) {
      let symbol = "."
      
      const curWorkers = workers.filter(worker => worker.pos === j)
      const worker = curWorkers[0]
      
      if (j === 0) {
        if (worker) {
          symbol = "*"
        } else {
          symbol = "M"
        }
      } else if (j === path.length - 1) {
        if (worker) {
          symbol = "*"
        } else {
          symbol = "B"
        }
      } else {
        if (worker) {
          if (worker.dir === "left") {
            symbol = "<"
          } else {
            symbol = ">"
          }
        }

        if (curWorkers.length > 1) {
          symbol = "#"
        }
      }

      
      newPath += symbol
    }
    
    result.push(newPath)
  }
  
  return [path, ...result];
}
