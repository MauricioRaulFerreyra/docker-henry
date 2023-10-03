const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  //Referencia al ID del Personaje
  characters: [{ type: String, ref: "Character" }],
  //Referencia al ID del Planeta
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find().populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};
// Se pasa un objeto
filmSchema.statics.get = async function (_id) {
  return await this.findOne({ _id }).populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};
//Se pasa un id
filmSchema.statics.getById = async function (id) {
  return await this.findById(id).populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};
//Se crea un character
filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;
