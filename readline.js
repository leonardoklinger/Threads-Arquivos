const readLine = require('readline')
const fs = require('fs')
const readable = fs.createReadStream('worldcities.csv')

const rl = readLine.createInterface({
    input: readable,
    //output: process.stdout
})

let teste = []
rl.on('line', (line) => {
    teste.push(line)
})

rl.on('close', () => {//filter(x => x.indexOf("Sao") > -1)
    console.log(teste.map(x => x).filter(x => x.indexOf("Sao") > -1))
})