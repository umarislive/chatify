import express from "express";
const router = express.Router();
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

// router.get("/test", arcjetProtection, (req, res) => {
//   return res.status(200).json({ message: "Test route" });
// });
// router.use(arcjetProtection);
router.post("/signup", arcjetProtection, signup);
router.post("/login", arcjetProtection, login);
router.post("/logout", arcjetProtection, logout);
router.put("/update-profile", arcjetProtection, protectRoute, updateProfile);
router.get("/check", arcjetProtection, protectRoute, (req, res) =>
  res.status(200).json(req.user)
);

export default router;
