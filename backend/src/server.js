import express from "express";
const app = express();
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/db.js";

app.use(express.json());
app.use("/api/auth", authRoutes);

// make ready for deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*all", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
  connectDB();
});
