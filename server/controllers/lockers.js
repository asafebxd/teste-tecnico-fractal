const getHandlers = (req, res) => {
  try {
    const lockers = "lockers";
    res.status(200).json(lockers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const locker = {
  getHandlers,
};

export default locker;
