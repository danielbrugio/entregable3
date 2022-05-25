const express = require("express");
const fs = require('fs')

const app = express();

const DBfile = 'productos.json'

const PORT = process.env.PORT || 8080;

app.get("/productos", (request, response) => {
 const data = JSON.parce(fs.readFileSync(DBfile))

 response.json(data)
});

let count = 0;
app.get("/visitas", (request, response) => {
  count++;
  response.send("La cantidad de visitas es: " + count);
});

app.get("/fyh", (request, response) => {
  let fyh = new Date();
  response.send({ fyh: "La fecha y hora actual es: " + fyh.toLocaleString() });
});

const server = app.listen(PORT, () => {
  console.log(`Server http on ${PORT} ......`);
});
server.on("error", (error) => console.log("Error on server", error));
