const express = require("express");
const Contenedor = require('./contenedor')

const DBfile = 'productos.json'
const app = express();
const contenedor = new Contenedor(DBfile)

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
    response.send(
      "<h1 style='color: blue'>Hola! Agrega en la url /productos para acceder al listado completo de Productos o /productosRandom para que te muestra un producto al azar</h1>"
    );
  });

app.get('/productos', (request, response) => {
 const data = contenedor.getAll()
 response.json(data)
}); 

app.get('/productosRandom', (request, response) => {
 const data = contenedor.getAll()
 const numero = Math.floor(Math.random() * data.length)
 const item = data[numero]
 response.json(item)
}); 

//app.listen(8080)

const server = app.listen(PORT, () => {
  console.log(`Server http on ${PORT} ......`);
});
server.on("error", (error) => console.log("Error on server", error));
