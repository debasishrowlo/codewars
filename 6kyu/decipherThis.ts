export function decipherThis(str: string): string {
  return str.split(" ").map(word => {
    let number = ""
    let alphabets:string[] = []
    
    word.split("").forEach(letter => {
      if (/[0-9]/.test(letter)) {
        number += letter
      } else {
        alphabets.push(letter)
      }
    })
    
    if (alphabets.length > 1) {
      alphabets = [
        alphabets[alphabets.length - 1],
        ...alphabets.slice(1, alphabets.length - 1),
        alphabets[0]
      ]
    }
    
    return String.fromCharCode(parseInt(number)) + alphabets.join("")
  }).join(" ")
}
