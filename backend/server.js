import express from "express";
import db from "./db.js";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // parse JSON
// Users route
app.get("/", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query(
      "SELECT username, role FROM users WHERE username=? AND password=?",
      [username, password]
    );

    if (rows.length > 0) {
      res.json({ success: true, user: rows[0] });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
