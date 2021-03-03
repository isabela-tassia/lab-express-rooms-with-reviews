const express = require("express");
const router = express.Router();

const Room = require("../models/Room.model");

// Crud (Create): Criar um novo post
router.post("/room", async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);

    return res.status(201).json(newRoom);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

// crUd (Update): Rota para atualizar um quarto específico
router.patch("/room/:id", async (req, res) => {
  try {
    // O findOneAndUpdate() vai buscar um documento que atenda à consulta do primeiro parâmetro, e, caso encontre, atualizar com o conteúdo do segundo parâmetro. Ao final da atualização, retornará o objeto atualizado
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    // Se o findOne() retornar null, ou seja, não encontrar o quarto no banco, retornamos um 404 dizendo que não encontramos o quarto
    if (!updatedRoom) {
      return res.status(404).json({ msg: "Room not found" });
    }

    return res.status(200).json(updatedRoom);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

// cruD (Delete): Apaga o quarto especificado do banco

router.delete("/room/:id", async (req, res) => {
  try {
    const deleted = await Room.deleteOne({ _id: req.params.id });

    if (!deleted) {
      return res.status(404).json({ msg: "Room not found" });
    }
    console.log(deleted);
    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

// cRud (Read): Rota para listar todos os quartos
router.get("/room", async (req, res) => {
  try {
    // O find() sem filtros traz todos os documentos da collection
    const rooms = await Room.find();
    console.log(rooms);

    // O status 200 é um status genérico de sucesso (OK)
    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.get("/room/:id", async (req, res) => {
  try {
    const room = await Room.findOne({ _id: req.params.id }).populate("reviews");
    console.log(room);

    // O status 200 é um status genérico de sucesso (OK)
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
