function drawGift (size: number, symbol: string): string {
  let res = '#\n'
  const faceSize = size - 2

  if (size > 1) {
    const symbolFaceSizeC = symbol.repeat(faceSize)
    res = `${" ".repeat(size - 1)}${"#".repeat(size)}\n`
    for (let i = 0; i < faceSize; i++) {
      const p1 = " ".repeat(size - 2 - i)
      res += `${p1}#${symbolFaceSizeC}#${symbol.repeat(i)}#\n`
    }
    res += "#".repeat(size)
    res += symbolFaceSizeC
    res += "#\n"
    for (let i = 0; i < faceSize; i++) {
      const p2 = symbol.repeat(faceSize - 1 - i)
      res += `#${symbolFaceSizeC}#${p2}#\n`
    }
    res += "#".repeat(size)
    res += "\n"
  }


  return res
}