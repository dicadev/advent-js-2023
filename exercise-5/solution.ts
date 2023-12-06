function cyberReindeer (road: string, time: number): string[] {
  let result: string[] = []
  let position = -1
  let emptyRoad = road.replace('S', '.')
  for (let i = 0; i < time; i++) {
    if (i == 5) {
      emptyRoad = emptyRoad.replaceAll('|', '*')
    }
    if (emptyRoad[position + 1] !== '|') {
      position += 1
      let firstPart = emptyRoad.substr(0, position)
      let lastPart = emptyRoad.substr(position + 1)
      const newValue = firstPart + 'S' + lastPart
      result.push(newValue)
    } else {
      result.push(result[result.length - 1])
    }
  }
  return result
}