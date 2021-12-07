const express = require("express")
const readLine = require("./readline.js")
const app = express()
const porta = process.env.PORT || 3000

app.use(express.json())
app.listen(porta, function() {
    console.log(`Server está online na porta -> ${porta}`)
})

app.get("/nome/:nomeEstado", async (req, res) => {
    const { nomeEstado } = req.params
    readLine.run(nomeEstado, res)
})