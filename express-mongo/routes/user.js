const express = require("express");

const router = express.Router();
const UserController = require("../controller/user");
router.get("/", UserController.getUser);

// GET /UserAuthority/:id
router.get("/:id", UserController.getUser);

// POST /tweeets
router.post("/", UserController.createUser);

// PUT /UserAuthority/:id
router.put("/:id", UserController.updateUser);

// DELETE /UserAuthority/:id
router.delete("/:id", UserController.deleteUser);

module.exports = router;
