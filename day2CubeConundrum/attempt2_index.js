const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

// Part !
let arrayThatContainsGameAndPhase = [] // [game id, phases]
let storePhases = function seperateGameAndPhase(input) {
  let seperatingGameandPhases = input.map((eachGame) => {
    const [game, phase] = eachGame.split(':')
    // seperates phases into an array
    let phases = phase.split(';').join().substring(1)
    return arrayThatContainsGameAndPhase.push([game, phases])
  })
  return seperatingGameandPhases
}
storePhases(input)

const maxRed = 12
const maxGreen = 13
const maxBlue = 14

const badArray = []
let countOfGameIDs = 0
let countOfBadArrays = 0

for (let i = 0; i < arrayThatContainsGameAndPhase.length; i++) {
  countOfGameIDs += i + 1
  const element = arrayThatContainsGameAndPhase[i][1]
  const element2 = arrayThatContainsGameAndPhase[i][0]
  let arr = element.split(',')
  for (j in arr) {
    const subElement = arr[j].split(' ').filter((data) => {
      return data !== ''
    })
    if (subElement[1] === 'red') {
      if (Number(subElement[0]) > maxRed) {
        let removeGame = element2.replaceAll('Game ', '')
        goodArray.push(Number(removeGame))
        break
      }
    }
    if (subElement[1] === 'green') {
      if (Number(subElement[0]) > maxGreen) {
        let removeGame = element2.replaceAll('Game ', '')
        goodArray.push(Number(removeGame))
        break
      }
    }
    if (subElement[1] === 'blue') {
      if (Number(subElement[0]) > maxBlue) {
        let removeGame = element2.replaceAll('Game ', '')
        goodArray.push(Number(removeGame))
        break
      }
    }
  }
}

for (gameID in badArray) {
  countOfBadArrays += badArray[gameID]
}

console.log(badArray)

