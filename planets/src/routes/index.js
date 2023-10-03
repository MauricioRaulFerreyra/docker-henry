const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
const middlewares = require("../middlewares");

router.get("/planets", controllers.getPlanets);
router.post("/", middlewares.planetsValidation, controllers.createPlanets);

module.exports = router;
