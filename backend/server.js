const express = require("express");
const cors = require("cors");
const path = require("path");

const gpsRoutes = require("./routes/gps");
const relatorioRoutes = require("./routes/relatorio");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 SERVIR OS ARQUIVOS HTML
app.use(express.static(path.join(__dirname, "../frontend")));

// 👉 ROTAS DA API
app.use("/api/gps", gpsRoutes);
app.use("/api/relatorio", relatorioRoutes);

// 👉 ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("Servidor da Frota está rodando ✅");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
