import mongoose from "mongoose";

// Cria Schema da tabela
const LockersSchema = mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    cast: false,
  },
  ecp: {
    type: String,
    required: true,
    cast: false,
  },
  ativo: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Locker = mongoose.model("Locker", LockersSchema);

export default Locker;
