const express = require('express');
const router = express.Router();
const { register, Login,signout, userList, userEdit, validate ,checkToken} = require("../controllers/UserController");



//extra Routes
router.post("/signin", Login);
router.post("/signout", signout);
router.post("/validate", validate);
//router.get("/userlist", userList);
router.get("/userEdit/:id", userEdit);
module.exports = router;
