const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { veiculo, latitude, longitude, status, data } = req.body;

  await db.query(
    "INSERT INTO localizacoes (veiculo, latitude, longitude, status, data_hora) VALUES ($1,$2,$3,$4,$5)",
    [veiculo, latitude, longitude, status, data]
  );

  res.json({ ok: true });
});

module.exports = router;
