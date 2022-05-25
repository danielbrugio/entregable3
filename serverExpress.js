const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
    response.send({msn: 'Hola a todos!'})
})
app.get('/products', (request, response) => {
    response.send([
        {name: 'beers', price: 120},
        {name: 'gaseosa', price: 50},
        {name: 'chips', price: 90},
        {name: 'snacks', price: 75},
    ])
})

const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT} ......`)
})
server.on('error', error => console.log('Error on server', error))