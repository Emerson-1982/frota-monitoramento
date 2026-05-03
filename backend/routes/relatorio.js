const express = require("express");
const ExcelJS = require("exceljs");
const db = require("../db");

const router = express.Router();

router.get("/excel", async (req, res) => {
  const { veiculo, inicio, fim } = req.query;

  const dados = await db.query(
    `SELECT * FROM localizacoes
     WHERE veiculo = $1
     AND data_hora BETWEEN $2 AND $3
     ORDER BY data_hora`,
    [veiculo, inicio, fim]
  );

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("Relatório");

  ws.columns = [
    { header: "Veículo", key: "veiculo" },
    { header: "Latitude", key: "latitude" },
    { header: "Longitude", key: "longitude" },
    { header: "Status", key: "status" },
    { header: "Data/Hora", key: "data_hora" }
  ];

  ws.addRows(dados.rows);

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=relatorio_frota.xlsx"
  );

  await wb.xlsx.write(res);
  res.end();
});

module.exports = router;
