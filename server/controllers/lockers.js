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

//Cria novo item na tabela Locker com dados do corpo da requisição
const postHandler = async (req, res) => {
  console.log(req.body);

  try {
    const locker = await Locker.create({
      codigo: req.body?.codigo,
      ecp: req.body?.ecp,
      ativo: req.body?.ativo,
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
  const { id } = req.params;

  try {
    const locker = await Locker.findByIdAndUpdate(
      id,
      {
        $set: {
          codigo: req.body.codigo,
          ecp: req.body.ecp,
          ativo: req.body.ativo,
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
  const { id } = req.params;

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
  postHandler,
  deleteHander,
  patchHandler,
};

export default locker;
