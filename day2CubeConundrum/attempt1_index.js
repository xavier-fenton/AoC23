const fs = require('fs')

const MAXCUBEVALUES = {
  red: 12,
  blue: 14,
  green: 13,
}
//  readAndSplitInputByLine
// compareCubeValues
// isPossibleCube
// getGameIdAndSets
// checkIfthisGameIsPossible
// getSumOfPossibleGameIds
fs.readFile('input.txt', 'utf-8', (err, data) => {
  const readData = data.split('\n')
  let x = readData.map((value) => {
    let z = value.split(':')
    let y = z.map((value) => {
      let n = value.split(';')
      return n
    })

    return y
  })

  let scanForNumber = x.map((value) => {
    let phases = value[1]
    let eachone = phases.map((phase) => {
      let scoresFromPhase = parseInt(phase)
      if (scoresFromPhase >= 12 && 13 && 14) {
        return !phase
      }
      return parseInt(phase)
    })

    return value[0] + ' ' + eachone
  })

  let filterGamesWithFalse = scanForNumber.map((tofilter) => {
    if (!tofilter.includes('false')) {
      return tofilter
    }
  })

  let arrayWithNoMax = filterGamesWithFalse.filter(function (element) {
    return element !== undefined
  })

  let arrayOfRemainingGames = arrayWithNoMax.map((data) => {
    return parseInt(data.match(/\d+/)[0])
  })
  console.log(arrayOfRemainingGames)
  let getTotal = arrayOfRemainingGames.reduce(
    (partialSum, a) => partialSum + a,
    0
  )
})
