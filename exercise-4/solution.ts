function decode (message: string): string {
  while (message.includes('(')) {
    const startIndex = message.lastIndexOf('(')
    const endIndex = message.indexOf(')', startIndex)
    const substring = message.substring(startIndex + 1, endIndex)
    const reversedSubstring = substring.split('').reverse().join('')
    message = message
      .substring(0, startIndex) +
      reversedSubstring +
      message.substring(endIndex + 1)
  }
  return message
}