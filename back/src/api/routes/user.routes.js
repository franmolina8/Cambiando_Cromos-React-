const express = require("express");
const router = express.Router();

const { register, login, getAllUsuarios, patchUsuarios, getUsuarioID, deleteUsuario, quitarCromo } = require("../controllers/user.controller");
const {  isRegistered, isAdmin } = require("../../middlewares/auth.middleware");

router.post("/register", register);
router.post("/login", login);

router.get("/users", getAllUsuarios);
router.get("/:id", getUsuarioID);

router.delete("/:id",  deleteUsuario);

router.patch("/:id", patchUsuarios);
router.patch("/eliminar/:id", quitarCromo);



module.exports = router;
