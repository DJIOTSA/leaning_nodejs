const getAllTasks = (req, res) => {
  res.status(200).send("get all items");
};

const getTask = (req, res) => {
  res.status(200).json(req.params);
};

const updateTask = (req, res) => {
  res.status(200).json(req.body);
};

const createTask = (req, res) => {
  res.status(200).json(req.body);
};

const deleteTask = (req, res) => {
  res.status(200).json(req.params);
};

module.exports = { getAllTasks, createTask, deleteTask, updateTask, getTask };
