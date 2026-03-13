// ping thepotato.local
// ssh thepotato@<IP adress>
// cd my-server/raspi-nodeserver
// node app.js

// git commit -a -m "<message>"
// git push
// git pull

const express = require('express')
const app = express()
const port = 3000

let counter = 0

app.get('/increment', (req, res) => {
  counter++

  res.json({currentCounter: counter})
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`My stoopid app is listening on port ${port}`)
})