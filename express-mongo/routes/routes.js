const express = require("express");

const router = express.Router();

const UserRouters = require('./user');

router.use("/user", UserRouters);

module.exports = router;