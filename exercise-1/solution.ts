function findFirstRepeated (gifts: number[]): number {
  for (let i = 1; i < gifts.length; i++) {
    if (gifts.indexOf(gifts[i]) < i) {
      return gifts[i]
    }
  }
  return -1
}