const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
// const registrationSchema = require("../validation/register")
// const loginSchema = require("../validation/login")

// const checkAuth = require("../checkAuth")

// POST REQUEST
router.post("/", usersController.createUser);

// router.post("/login", checkSchema(loginSchema), usersController.loginUser);

// GET REQUEST
// router.get("/", usersController.getAllUsers);
// router.get("/:id", usersController.getOneUser);

// DELETE REQUEST

module.exports = router;
