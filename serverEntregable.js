const express = require("express");
const Contenedor = require('./contenedor')

const DBfile = 'productos.txt'
const app = express();
const contenedor = new Contenedor(DBfile)

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
    response.send(
      "<h1 style='color: black'>Hola! Aquí no hay nada! Para acceder a los datos hace lo siguiente:</h1> \n <h2>1) Agregá en la url /productos para acceder al listado completo de Productos</h2> \n <h2>2) Agregá /productosRandom para que te muestra un producto al azar</h2>"
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
