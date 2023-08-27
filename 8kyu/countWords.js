function countWords(str) {
  return str.split(/\s|&nbsp;/g).filter(word => word !== "").length
}
