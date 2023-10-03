const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  //Referencia al ID del planeta
  homeworld: { type: String, ref: "Planet" },
  //Referencia al ID de la pelicula
  films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function () {
  return await this.find().populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
};
// Se pasa un objeto
characterSchema.statics.get = async function (_id) {
  return await this.findOne({ _id }).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
};
//Se pasa un id
characterSchema.statics.getById = async function (id) {
  return await this.findById(id).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
};
//Se crea un character
characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
