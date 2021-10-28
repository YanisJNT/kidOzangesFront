const router = require("express").Router();

// We import all controllers
const mainController = require("./controllers/mainController")
const userController = require("./controllers/userController");
const adminController = require("./controllers/adminController");
const activityController = require("./controllers/activityController"); 


//User signup route
router.get("/", mainController.getReactApp);
router.post("/api/user/signup", userController.signup);
//user login route
//router.post("/api/user/login", userController.login);



module.exports = router;