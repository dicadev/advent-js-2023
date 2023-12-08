function organizeGifts (gifts) {
  let res = ''

  const chars = gifts.match(/[a-z]/g)
  const nums = gifts.match(/\d+/g)

  for (let i = 0; i < chars.length; i++) {
    const num = nums[i]
    const char = chars[i]

    const packed = Math.floor(num / 50)
    const boxes = Math.floor((num % 50) / 10)
    const inBags = num % 10

    const packedStr = `[${char}]`.repeat(packed)
    const boxesStr = `{${char}}`.repeat(boxes)
    const inBagsStr = inBags ? `(${char.repeat(inBags)})` : ""

    res += `${packedStr}${boxesStr}${inBagsStr}`
  }
  return res
}