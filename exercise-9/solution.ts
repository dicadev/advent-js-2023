function adjustLights (lights) {
  let changes0 = 0
  let changes1 = 0

  for (let i = 0; i < lights.length; i++) {
    i % 2 === 0 ?
      lights[i] !== '🔴' ? changes0++ : changes1++
      : lights[i] !== '🟢' ? changes0++ : changes1++
  }
  return Math.min(changes0, changes1)
}