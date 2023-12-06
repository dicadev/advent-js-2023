function manufacture (gifts: string[], materials: string): string[] {
  return gifts.filter(g =>
    g.split("").map(c => materials.split("").includes(c)).every(i => i === true))
}