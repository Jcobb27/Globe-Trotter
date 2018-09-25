const router = require("express").Router();

// Location routes
const locsController = require("../../controllers/locsController");

// Matches with "/api/locations"
router.route("/locations")
  .get(locsController.findAll)
  .post(locsController.create);

// Matches with "/api/locations/:id"
router.route("/locations/:id")
  .get(locsController.findById)
  .put(locsController.update)
  .delete(locsController.remove);

 //Matches with "/api/locations/US/states" 
 router.route("/locations/US/states")
 .get(locsController.findStates);

  //Matches with "/api/locations/all/countries" 
  router.route("/locations/all/countries")
  .get(locsController.findCountries);

module.exports = router;
