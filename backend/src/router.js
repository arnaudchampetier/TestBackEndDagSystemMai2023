const express = require("express");

const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const cookControllers = require("./controllers/cookControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des Users
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", verifyToken, userControllers.destroy);

// Gestion des Vehicles
router.get("/cook", cookControllers.browse);
router.get("/cook/:id", cookControllers.read);
router.put("/cook/:id", verifyToken, cookControllers.edit);
router.post("/cook", cookControllers.add);
router.delete("/cook/:id", verifyToken, cookControllers.destroy);

module.exports = router;
