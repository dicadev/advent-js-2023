function findNaughtyStep (original: string, modified: string): string {
  const iteL = original.length > modified.length ? original : modified
  let testL = [...iteL]
  let res = ""

  for (let i = 0; i < iteL.length; i++) {
    if (original[i] === modified[i]) {
      testL.splice(0, 1)
    } else {
      if (!original[i]) {
        res = modified[i]
      } else if (!modified[i]) {
        res = original[i]
      } else {
        const orEnd = original.substring(i)
        const modEnd = modified.substring(i + 1)
        res = orEnd === modEnd ? modified[i] : original[i]
      }
      break
    }
  }
  return res
}