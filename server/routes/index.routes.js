// Importar o express e criar uma nova instância de roteador
const express = require("express");
const router = express.Router();

// Definir uma rota de teste
router.get("/hello", (req, res) => {
  // Responder a requisição com uma string em formato JSON
  res.json("Hello!");
});

// Exportar nossa instância de roteador configurada
module.exports = router;
