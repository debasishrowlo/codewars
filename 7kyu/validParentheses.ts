export function validParentheses(parens: string): boolean {
  let result = 0
  
  for (let i = 0; i < parens.length; i++) {
    parens[i] === "(" ? result++ : result--
    
    if (result < 0) return false
  }
  
  return result === 0
}
