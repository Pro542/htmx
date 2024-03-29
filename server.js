const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Copenhagen?')
})

app.post('/clicked', (req, res) => {
    res.send('clicked response from server')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
