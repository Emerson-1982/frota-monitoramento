const express = require("express");
const cors = require("cors");
const path = require("path");

const gpsRoutes = require("./routes/gps");
const relatorioRoutes = require("./routes/relatorio");

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos HTML da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rotas da API
app.use("/api/gps", gpsRoutes);
app.use("/api/relatorio", relatorioRoutes);

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor da Frota está rodando ✅");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
