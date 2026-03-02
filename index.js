// BACKEND/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importar la función de conexión
const connectDB = require("./config/db");

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando y conectado a MongoDB.");
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
