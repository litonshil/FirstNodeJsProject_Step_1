const express = require('express')
const morgan = require('morgan')
const app = express()

//Middleware Array
const middleware = [
    morgan('dev'),
    express.urlencoded({ extended: true}),
    express.json()

]

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})