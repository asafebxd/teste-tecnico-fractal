import mongoose from "mongoose";

const LockersSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
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
    required: true,
    default: false,
  },
});

const Locker = mongoose.model("Locker", LockersSchema);

export default Locker;
