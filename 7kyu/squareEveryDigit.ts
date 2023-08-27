export class Kata {
  static squareDigits(num: number): number {
    const numString = num.toString()
    const squaredStrings:string[] = []
    
    for (let i = 0; i < numString.length; i++) {
      const currentNum = parseInt(numString[i])
      squaredStrings.push((currentNum * currentNum).toString())
    }
    
    return parseInt(squaredStrings.join(''))
  }
}
