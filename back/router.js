const router = require("express").Router();

// We import all controllers
const userController = require("./controllers/userController");
const adminController = require("./controllers/adminController");
const activityController = require("./controllers/activityController"); 


//User signin route
router.post("/api/user/signin", userController.signin);
//user login route
//router.post("/api/user/login", userController.login);



module.exports = router;