require("dotenv").config();
console.log(__dirname + "/.env");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configurar nosso app Express para entender requisições com conteúdo JSON
app.use(express.json());

// Configurar nosso app para entender requisições do tipo URLEncoded (para envio de imagens)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: "http://localhost:3000" }));

// Importar a configuração do banco de dados (mongoose)
const db = require("./config/db.config.js");
// Invoca a função que realiza a conexão com o banco de dados
db();

// Importar os roteadores
const router = require("./routes/index.routes");
app.use("/", router);

const roomRouter = require("./routes/room.routes");
app.use("/", roomRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/", reviewRouter);

// Subir o servidor web para escutar requisições

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
