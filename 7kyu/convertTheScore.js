function scoreboard (string) {
  const words = string.split(" ")
  const scores = ["nil", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  return [
    scores.indexOf(words[words.length - 2]),
    scores.indexOf(words[words.length - 1]),
  ]
}
