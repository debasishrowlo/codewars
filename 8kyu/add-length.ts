export function addLength(str: string): string[] {
  return str.split(" ").map(word => `${word} ${word.length}`)
}
