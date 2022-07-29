const express = require("express");
 const router = express.Router();

 const { getAllMercado, getMercadoID, deleteMercado, createMercado, patchMercado} = require("../controllers/mercado.controllers");

 router.get("/", getAllMercado);
 router.get("/:id", getMercadoID);

 router.delete("/:id", deleteMercado);

 router.post("/", createMercado);

 router.patch("/:id", patchMercado);

 module.exports = router;
