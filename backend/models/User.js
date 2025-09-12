import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  preferences: {
    themeMode: { type: String, default: "light" },
    themeColor: { type: String, default: "blue" },
    language: { type: String, default: "fr" },
    avatarUrl: { type: String, default: "" },
  },
});

export default mongoose.model("User", UserSchema);
