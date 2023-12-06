function maxDistance (movements: string): number {
  const counts = movements.split("").reduce((accumulator, value) => {
    if (value in accumulator) {
      accumulator[value] = accumulator[value] + 1
    } else {
      accumulator[value] = 1
    }
    return accumulator
  }, {})
  const maxVal = Math.max(counts['<'] ?? 0, counts['>'] ?? 0)
  const minVal = Math.min(counts['<'] ?? 0, counts['>'] ?? 0)
  const rest = maxVal - minVal
  const extra = counts['*'] ?? 0
  return rest + extra
}