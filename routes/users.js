// BACKEND/routes/users.js
const express = require("express");
const router = express.Router();

// Ruta GET para obtener usuarios
router.get("/", (req, res) => {
  res.json({ message: "Aquí obtendrás la lista de usuarios" });
});

module.exports = router;
