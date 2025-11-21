import mongoose from "mongoose";

const LockersSchema = mongoose.Schema({
  codigo: {
    type: String,
    required: true,
  },
  ecp: {
    type: String,
    required: true,
  },
  ativo: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Locker = mongoose.model("Locker", LockersSchema);

export default Locker;
