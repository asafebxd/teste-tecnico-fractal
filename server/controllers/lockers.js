import Locker from "../models/schema.js";

//Busca todos os items da tabela Locker
const getHandler = async (req, res) => {
  try {
    const lockers = await Locker.find({});

    if (!lockers) {
      return res.status(404).json({ message: "Locker not found" });
    }

    return res.status(200).json(lockers);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//Busca item da tabela Locker por Id
const getByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const locker = await Locker.findById({ id });

    if (!locker) {
      return res.status(404).json({ message: "Locker not found" });
    }

    return res.status(200).json(locker);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//Cria novo item na tabela Locker com dados do corpo da requisição
const postHandler = async (req, res) => {
  const lockerForm = req.body?.form;

  try {
    const locker = await Locker.create({
      codigo: lockerForm?.codigo,
      ecp: lockerForm?.ecp,
      ativo: lockerForm?.ativo,
    });

    if (!locker) {
      return res.status(400).json({ message: "Bad request" });
    }

    return res.status(201).json(locker);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca item por ID e edita com dados do corpo da requisição
const patchHandler = async (req, res) => {
  const id = req.params.id;

  const lockerForm = req.body?.form;

  try {
    const locker = await Locker.findByIdAndUpdate(
      id,
      {
        $set: {
          codigo: lockerForm.codigo,
          ecp: lockerForm.ecp,
          ativo: lockerForm.ativo,
        },
      },
      {
        new: true,
      }
    );

    if (!locker) {
      return res.status(404).json({ message: "Locker not found" });
    }

    return res.status(200).json(locker);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca item por ID e deleta
const deleteHander = async (req, res) => {
  const id = req.params.id;

  try {
    const locker = await Locker.findByIdAndDelete(id);

    if (!locker) {
      return res.status(404).json({ message: "Locker not found" });
    }

    return res
      .status(200)
      .json({ message: `locker ${locker.codigo} deleted successfully` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const locker = {
  getHandler,
  getByIdHandler,
  postHandler,
  deleteHander,
  patchHandler,
};

export default locker;
