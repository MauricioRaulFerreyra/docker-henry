const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
const middlewares = require("../middlewares");

router.get("/films", controllers.getFilms);
router.post("/", middlewares.filmsValidation, controllers.createFIlms);

module.exports = router;
