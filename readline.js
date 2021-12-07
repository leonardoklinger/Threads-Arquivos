const readLine = require('readline')
const fs = require('fs')
exports.run = async (nomeFiltro, res) => {
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
        //let sla = teste.map(x => x).filter(x => x.indexOf("Sao") > -1)
        const nomesFiltrados = teste.map(data => data.split(",")[1]).filter(x => x.indexOf(`${nomeFiltro}`) > -1)
        res.json(nomesFiltrados)
    })
}