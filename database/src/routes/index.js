const { Router } = require("express");
//los 3 modelos en store
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].getById(id);
  res.status(200).json(response);
});

// const character = {
//   _id: "103",
//   name: "Tion Medon",
//   height: "206",
//   mass: "80",
//   hair_color: "none",
//   skin_color: "grey",
//   eye_color: "black",
//   birth_year: "unknown",
//   gender: "male",
//   homeworld: "12",
//   films: ["6"],
// };

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const object = req.body;
  const response = await store[model].insert(object);
  res.status(200).json(response);
});

module.exports = router;
