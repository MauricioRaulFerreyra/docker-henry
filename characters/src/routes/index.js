const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
const middlewares = require("../middlewares");

router.get("/characters", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.createCharacters);

module.exports = router;
