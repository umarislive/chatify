import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();
import authRoutes from "./routes/auth.route.js";

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});
