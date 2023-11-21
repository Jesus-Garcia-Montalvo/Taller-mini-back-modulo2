const jsonServer = require("json-server"); //llamar a la dependencia que instalmos json server
const server = jsonServer.create(); //creamos el servido
const router = jsonServer.router(`${__dirname}/data/db.json`); //ruta del el archivo donde esta la data
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000; //definimos el puesto

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
}); //habilitamos la penticion

server.use(router);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running");
});