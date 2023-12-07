// /*
// -read file
// -put each line into and array
// -scan each index
// -remove all strings and leave numbers
// -then add numbers together */
const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  // put each line into and array
  // for part one
  let arrayOfData = data.split('\n')

  // for part two
  let replaceLinesInArray = arrayOfData.map((ele) => {
    const newLine = ele
      .replaceAll('one', 'o1e')
      .replaceAll('two', 't2o')
      .replaceAll('three', 't3e')
      .replaceAll('four', 'f4r')
      .replaceAll('five', 'f5e')
      .replaceAll('six', 's6x')
      .replaceAll('seven', 's7n')
      .replaceAll('eight', 'e8t')
      .replaceAll('nine', 'n9n')
    return newLine
  })

  let splitEachIndexAndReturnNums = replaceLinesInArray.map((value) => {
    let newElement = value.split('')
    let findStrings = newElement.map((str) => {
      return parseInt(str)
    })
    let filterStrs = findStrings.filter((value) => {
      return !Number.isNaN(value)
    })
    return filterStrs
  })

  let singles = []
  let morethanSingle = []

  function findSpecifics(arr) {
    arr.map((x) => {
      if (x.length === 1) {
        let singlesFound = x + x

        singles.push(parseInt(singlesFound))
      }
      if (x.length !== 1) {
        let first = String(x[0])
        let last = String(x[x.length - 1])
        morethanSingle.push(parseInt(first + last))
      }
    })
  }

  findSpecifics(splitEachIndexAndReturnNums)

  let moreThanTotal = morethanSingle.reduce(
    (partialSum, a) => partialSum + a,
    0
  )
  let totalForSingles = singles.reduce((partialSum, a) => partialSum + a, 0)

  console.log(moreThanTotal + totalForSingles)
})
