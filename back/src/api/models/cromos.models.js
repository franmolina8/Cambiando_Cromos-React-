const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CromosSchema = new Schema(
  {
    posicion: { type: Number, required: false },
    imagen: { type: String, required: false },
    imagenback: { type: String, required: false },
    nombre: { type: String, required: false },
    nacionalidad: { type: String, required: false },
    rol: { type: String, required: false },
    lenguaje: { type: String, required: false },
    frase: { type: String, required: false },
    status: { type: String, required: false },
  },
  { timestamps: true }
);

const Cromo = mongoose.model("cromos", CromosSchema);

module.exports = Cromo;