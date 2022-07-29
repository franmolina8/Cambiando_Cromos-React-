const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

 const saltRounds = 10

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  usuario: {type: String, required: true},
  rol:{type: String, enum:["admin", "user"], default:"user", trim: true, required: true},
  album: [{type: Schema.Types.ObjectId, ref: "cromos", required: false}],
  repetido: [{type: Schema.Types.ObjectId, ref: "cromos", required: false}]
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model("users", UserSchema);
module.exports = User;