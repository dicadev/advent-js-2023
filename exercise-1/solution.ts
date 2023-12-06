function findFirstRepeated (gifts: number[]): number {
  let numbers: number[] = []
  let result = -1
  for (let i = 0; i < gifts.length; i++) {
    if (numbers.includes(gifts[i])) {
      result = gifts[i]
      break
    }
    numbers.push(gifts[i])
  }
  return result
}
