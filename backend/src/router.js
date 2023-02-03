const express = require("express");

// Ajout de multer
const multer = require("multer");

const router = express.Router();

// On définit la destination de stockage de nos fichiers
// const upload = multer({ dest: process.env.AVATAR_DIRECTORY });
// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "public/uploads/" });

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const cookControllers = require("./controllers/cookControllers");
const fileControllers = require("./controllers/fileControllers");

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

// Gestion des Cooks
router.get("/cook", cookControllers.browse);
router.get("/cook/:id", cookControllers.read);
router.put("/api/cook/:id", verifyToken, cookControllers.edit);
router.post("/api/cook", cookControllers.add);
router.delete("/cook/:id", verifyToken, cookControllers.destroy);

// Gestion des avatars

router.put(
  "/api/avatars",
  upload.single("profilePicture"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);

module.exports = router;
