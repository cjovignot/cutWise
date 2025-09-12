import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/:id/preferences", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user.preferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id/preferences", async (req, res) => {
  try {
    const { themeMode, themeColor, language } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.preferences = { themeMode, themeColor, language };
    await user.save();
    res.json(user.preferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
