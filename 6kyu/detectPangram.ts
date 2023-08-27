export const isPangram = (phrase: string): boolean => {
  const alphabets:{
    [key:string]: boolean,
  } = {}
  
  const lowerCasePhrase = phrase.toLowerCase()
  
  for (let i = 0; i < lowerCasePhrase.length; i++) {
    const letter = lowerCasePhrase[i]
    
    if ((/[a-z]/).test(letter) === false) {
      continue
    }
    
    alphabets[letter] = true
  }
  
  return Object.keys(alphabets).length === 26
}
