function createChristmasTree (ornaments: string, height: number): string {
  let result = ""
  const numChars = (height * (height + 1)) / 2
  const numSteps = Math.ceil(numChars / ornaments.length)
  const ornRep = ornaments.repeat(numSteps).substring(0, numChars)

  for (let i = 0; i < height; i++) {
    const sideEmptyStr = " ".repeat(height - 1 - i)
    const ornPart = ornRep.substring((i * (i + 1)) / 2, ((i + 1) * (i + 2)) / 2)
      .split("").join(" ")
    result += sideEmptyStr + ornPart + "\n"
  }

  result += " ".repeat(height - 1) + "|" + "\n"
  return result
}
