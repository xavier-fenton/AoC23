// ( up one floor
// ) down one floor

const fs = require('fs')

// const input = fs.readFileSync('input.txt', 'utf-8').split('')

// let onlyUp = []
// let onlyDown = []

// for (let line of input) {
//   const newLine = line.replaceAll('(', 'up').replaceAll(')', 'down')

//   let filterOutDown = newLine.replaceAll('down', '')
//   onlyUp.push(filterOutDown)

//   let filterOutUp = newLine.replaceAll('up', '')
//   onlyDown.push(filterOutUp)
// }

// let filterOutUnused = onlyUp.filter((data) => {
//   return data !== ''
// })
// let filterOutUnusedInDown = onlyDown.filter((data) => {
//   return data !== ''
// })
// console.log(filterOutUnused.length - filterOutUnusedInDown.length)

// answer is the 74 floor

// refactor

const input = fs.readFileSync('input.txt', 'utf-8').split('')

// I want add 2 elements to this array, first being the the total of up and the other being down
// then i want to reduce it but minus up from down, returning the final value
let addAll = []

for (let line of input) {
  const newLine = line.replaceAll('(', 'up').replaceAll(')', 'down')
 
}

let filterOutUnused = onlyUp.filter((data) => {
  return data !== ''
})
let filterOutUnusedInDown = onlyDown.filter((data) => {
  return data !== ''
})
console.log(filterOutUnused.length - filterOutUnusedInDown.length)
