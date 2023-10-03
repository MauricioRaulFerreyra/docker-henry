const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find().populate("films", ["_id", "title"]).populate("residents", ["_id", "name"]);
};
// Se pasa un objeto
planetSchema.statics.get = async function (_id) {
  return await this.findOne({ _id }).populate("films", ["_id", "title"]).populate("residents", ["_id", "name"]);
};
//Se pasa un id
planetSchema.statics.getById = async function (id) {
  return await this.findById(id).populate("films", ["_id", "title"]).populate("residents", ["_id", "name"]);
};
//Se crea un character
planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

module.exports = planetSchema;
