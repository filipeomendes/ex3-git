const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Implantação efetuada com sucesso')
})

app.listen(8080, () => {
  console.log(`Server is runinng.. http://localhost:8080`)
})
