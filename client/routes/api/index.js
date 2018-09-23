const router = require("express").Router();
const locRoutes = require("./locations");

// Location routes
const locsController = require("../../controllers/locsController");

// Matches with "/api/locations"
router.route("/locations")
  .get(locsController.findAll)
  .post(locsController.create);

// Matches with "/api/locations/:id"
router
  .route("/locations/:id")
  .get(locsController.findById)
  .put(locsController.update)
  .delete(locsController.remove);

module.exports = router;
