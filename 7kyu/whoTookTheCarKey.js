function whoTookTheCarKey(message) {
  return message
    .map(binary => parseInt(binary, 2))
    .map(charCode => String.fromCharCode(charCode))
    .join("")
}
