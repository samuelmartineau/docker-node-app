const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port 3000! ${process.env.PORT}`)
})
