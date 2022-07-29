const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MercadoSchema = new Schema(
    {
        user1Id: {type: Schema.Types.ObjectId, ref: "users", required: false},
        user2Id: {type: Schema.Types.ObjectId, ref: "users", required: false},
        cromo1Id: {type: Schema.Types.ObjectId, ref: "cromos", required: false},
        cromo2Id: {type: Schema.Types.ObjectId, ref: "cromos", required: false},
        wanted: {type: Schema.Types.ObjectId, ref: "cromos", required: false}
       
    },
    {timestamps: true}


);

const Mercado = mongoose.model("mercado", MercadoSchema);

module.exports = Mercado;