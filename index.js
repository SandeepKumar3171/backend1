const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello..!</h1>')
})

app.get('/image', (req, res) => {
    res.send("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/%282%29_A_child_in_India.jpg/1200px-%282%29_A_child_in_India.jpg' alt='Girl in a jacket' width='500'/>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})