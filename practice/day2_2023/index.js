const fs = require('fs')

const input = fs.readFileSync('test.txt', 'utf-8').trim()

const splitInput = input.split('\n')

let cards = splitInput.map((data) => {
  let [game, cards] = data.split(': ')
  let phases = cards.split(';')

  let filterStrings = phases.map((number) => {
    let arrayOfValues = [number]
    let findStrings = arrayOfValues.filter((str) => {
      return !Number.isNaN(str)
    })
    console.log(findStrings)
    return findStrings
  })

  console.log(filterStrings)
  // console.log(phases)
  return [game, phases]
})

console.log(cards)
// json example

const testobj = { name: 'John', age: 30, city: 'New York' }
const stringify = '{"name":"John","age":30,"city":"New York"}'

const example = {
  Game: 1,
  blue: 3,
  red: 4,
  red: 1,
  green: 2,
  blue: 6,
  green: 2,
}
