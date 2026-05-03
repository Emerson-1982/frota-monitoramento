const express = require("express");
const cors = require("cors");

const gpsRoutes = require("./routes/gps");
const relatorioRoutes = require("./routes/relatorio");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/gps", gpsRoutes);
app.use("/api/relatorio", relatorioRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
