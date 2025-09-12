import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
import userRoutes from "./api/users.js";
import uploadRoutes from "./api/upload.js";

app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
